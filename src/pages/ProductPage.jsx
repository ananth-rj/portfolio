import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "../components/Spinner";
import { addItemToCart } from "../redux/cartSlice";
import { fetchProducts } from "../redux/productsSlice";
import Modal from "../components/Modal";
import { toast } from "react-toastify";

function ProductPage() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [sortOrder, setSortOrder] = useState("default"); // "asc" | "desc" | "default"

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { products, isLoading, isError, message } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleViewDetails = (id) => {
    navigate(`/products/${id}`);
  };

  const handleAddToCartClick = (productId) => {
    if (!user) {
      setSelectedProductId(productId);
      setShowLoginModal(true);
      return;
    }
    dispatch(addItemToCart({ productId, qty: 1 }));
    toast.success("product added");
  };

  const handleLoginConfirm = () => {
    setShowLoginModal(false);
    navigate("/login");
  };

  const handleLoginCancel = () => {
    setShowLoginModal(false);
    setSelectedProductId(null);
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Spinner />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-center text-red-600 mt-10">
        <p className="text-lg font-semibold">Error:</p>
        <p>{message}</p>
      </div>
    );
  }
  let sortedProducts = [...products];

  if (sortOrder === "asc") {
    sortedProducts.sort((a, b) => a.price - b.price);
  } else if (sortOrder === "desc") {
    sortedProducts.sort((a, b) => b.price - a.price);
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <h3 className="text-3xl font-semibold mb-6 text-center text-gray-800">
        Products Page
      </h3>
      <div className="flex justify-end mb-4">
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="border border-gray-300 rounded px-3 py-1 text-gray-700"
        >
          <option value="default">Sort by (Default)</option>
          <option value="asc">Price: Low to High</option>
          <option value="desc">Price: High to Low</option>
        </select>
      </div>

      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {sortedProducts.map((product) => (
          <li
            key={product._id}
            className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center"
          >
            <p className="text-lg font-medium mb-3 text-center">
              {product.name}
            </p>
            {product.image && (
              <img
                src={product.image}
                alt={product.name}
                className="w-full max-h-48 object-contain rounded-md mb-4"
              />
            )}
            <p className="text-lg font-medium mb-3 text-center">
              ₹{product.price}
            </p>
            <div className="flex space-x-2">
              <button
                onClick={() => handleViewDetails(product._id)}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                View Details
              </button>
              <button
                onClick={() => handleAddToCartClick(product._id)}
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
              >
                Add to Cart
              </button>
            </div>
          </li>
        ))}
      </ul>

      {showLoginModal && (
        <Modal title="Login Required" onClose={handleLoginCancel}>
          <p className="mb-6">
            To add products to your cart, you need to login first.
          </p>
          <div className="flex justify-center space-x-4">
            <button
              onClick={handleLoginCancel}
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 transition"
            >
              Cancel
            </button>
            <button
              onClick={handleLoginConfirm}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              Yes, Login
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default ProductPage;
