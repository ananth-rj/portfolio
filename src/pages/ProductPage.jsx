import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { API_URL } from "../components/utils";
import Spinner from "../components/Spinner";
import { addItemToCart } from "../redux/cartSlice"; // adjust path as needed

function ProductPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    const getProducts = async () => {
      try {
        setLoading(true);
        const res = await fetch(`${API_URL}/api/products`);
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };
    getProducts();
  }, []);

  const handleViewDetails = (id) => {
    navigate(`/products/${id}`);
  };

  const handleAddToCartClick = (productId) => {
    if (!user) {
      setSelectedProductId(productId);
      setShowLoginModal(true);
      return;
    }
    // If logged in, add product with qty 1 by default
    dispatch(addItemToCart({ productId, qty: 1 }));
  };

  const handleLoginConfirm = () => {
    setShowLoginModal(false);
    navigate("/login");
  };

  const handleLoginCancel = () => {
    setShowLoginModal(false);
    setSelectedProductId(null);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <h3 className="text-3xl font-semibold mb-6 text-center text-gray-800">
        Products Page
      </h3>

      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <li
            key={product._id}
            className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center"
          >
            {product.image && (
              <img
                src={product.image}
                alt={product.name}
                className="w-full max-h-48 object-contain rounded-md mb-4"
              />
            )}
            <p className="text-lg font-medium mb-3 text-center">
              {product.name}
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

      {/* Modal for login prompt */}
      {showLoginModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full shadow-lg text-center">
            <h3 className="text-xl font-semibold mb-4">Login Required</h3>
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
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductPage;
