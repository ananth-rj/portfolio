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
    navigate(`/ecommerce/products/${id}`);
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
    navigate("/ecommerce/login");
  };

  const handleLoginCancel = () => {
    setShowLoginModal(false);
    setSelectedProductId(null);
  };

  if (isLoading) {
    return (
      <div className="flex flex-col justify-center items-center min-h-[60vh] px-4">
        <div className="text-center max-w-2xl">
          <div className="mb-6">
            <Spinner />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Loading Products...
          </h2>
          <p className="text-lg text-gray-600 mb-2">
            Data is coming from a real backend on a free plan
          </p>
          <p className="text-base text-gray-500">
            Please wait, it may take some time to load
          </p>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-center text-red-600 mt-10">
        <p className="text-lg font-semibold">Error:</p>
        <p>{message}</p>
        <p className="mt-4 text-sm text-gray-600">
          Please check if the API is running and VITE_API_URL is set correctly.
        </p>
      </div>
    );
  }

  if (!isLoading && products.length === 0) {
    return (
      <div className="text-center mt-10">
        <p className="text-lg font-semibold text-gray-700 mb-2">No products available</p>
        <p className="text-gray-600">
          Products will appear here once they are loaded from the API.
        </p>
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
    <div>
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
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-4 flex flex-col h-full"
            >
              <p className="text-lg font-semibold mb-3 text-center text-gray-800 min-h-[3rem] flex items-center justify-center">
                {product.name}
              </p>
              <div className="flex-1 flex items-center justify-center mb-4 min-h-[200px] bg-gray-50 rounded-md p-2 relative">
                {product.image ? (
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-w-full max-h-[200px] object-contain rounded-md"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      const placeholder = e.target.parentElement.querySelector('.image-placeholder');
                      if (placeholder) placeholder.classList.remove('hidden');
                    }}
                  />
                ) : null}
                <div className="hidden image-placeholder items-center justify-center text-gray-400 text-sm">
                  No Image Available
                </div>
              </div>
              <p className="text-xl font-bold mb-3 text-center text-blue-600">
                ₹{product.price}
              </p>
              <div className="flex flex-col sm:flex-row gap-2 mt-auto">
                <button
                  onClick={() => handleViewDetails(product._id)}
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition flex-1 text-sm"
                >
                  View Details
                </button>
                <button
                  onClick={() => handleAddToCartClick(product._id)}
                  className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition flex-1 text-sm"
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
    </div>
  );
}

export default ProductPage;
