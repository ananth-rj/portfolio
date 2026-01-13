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
      <div className="flex flex-col justify-center items-center min-h-[60vh] px-4 py-12 bg-gray-900">
        <div className="text-center max-w-2xl w-full">
          <div className="bg-gray-800 rounded-2xl shadow-2xl border border-gray-700 p-8 md:p-12 relative overflow-hidden">
            {/* Decorative gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-red-500/10 to-orange-500/10 opacity-50"></div>
            
            {/* Animated border gradient */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 opacity-20 blur-xl"></div>
            
            <div className="relative z-10">
              <div className="mb-8 flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-full blur-lg opacity-30 animate-pulse"></div>
                  <div className="relative">
                    <Spinner />
                  </div>
                </div>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent mb-6">
                Loading Products...
              </h2>
              
              <div className="space-y-3 mb-6">
                <p className="text-xl font-semibold text-gray-300">
                  Data is coming from a real backend on a free plan
                </p>
                <p className="text-base text-gray-400 italic">
                  Please wait, it may take some time to load
                </p>
              </div>
              
              {/* Animated dots */}
              <div className="flex justify-center space-x-2 mt-8">
                <div className="w-3 h-3 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                <div className="w-3 h-3 bg-red-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                <div className="w-3 h-3 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-center text-red-400 mt-10 bg-gray-900 min-h-[60vh] flex items-center justify-center">
        <div>
          <p className="text-lg font-semibold">Error:</p>
          <p className="text-gray-300">{message}</p>
          <p className="mt-4 text-sm text-gray-400">
            Please check if the API is running and VITE_API_URL is set correctly.
          </p>
        </div>
      </div>
    );
  }

  if (!isLoading && products.length === 0) {
    return (
      <div className="text-center mt-10 bg-gray-900 min-h-[60vh] flex items-center justify-center">
        <div>
          <p className="text-lg font-semibold text-gray-300 mb-2">No products available</p>
          <p className="text-gray-400">
            Products will appear here once they are loaded from the API.
          </p>
        </div>
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
    <div className="bg-gray-900 min-h-screen">
      <div className="container mx-auto px-4 py-6">
        <h3 className="text-3xl md:text-4xl font-bold mb-6 text-center text-gray-200">
          Products Page
        </h3>
        <div className="flex justify-end mb-6">
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          >
            <option value="default" className="bg-gray-800">Sort by (Default)</option>
            <option value="asc" className="bg-gray-800">Price: Low to High</option>
            <option value="desc" className="bg-gray-800">Price: High to Low</option>
          </select>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {sortedProducts.map((product) => (
            <li
              key={product._id}
              className="bg-gray-800 border border-gray-700 rounded-lg shadow-lg hover:shadow-xl hover:border-orange-500/50 transition-all p-4 flex flex-col h-full"
            >
              <p className="text-lg font-semibold mb-3 text-center text-gray-200 min-h-[3rem] flex items-center justify-center">
                {product.name}
              </p>
              <div className="flex-1 flex items-center justify-center mb-4 min-h-[200px] bg-gray-900 rounded-md p-2 relative">
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
                <div className="hidden image-placeholder items-center justify-center text-gray-500 text-sm">
                  No Image Available
                </div>
              </div>
              <p className="text-xl font-bold mb-3 text-center text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
                ₹{product.price}
              </p>
              <div className="flex flex-col sm:flex-row gap-2 mt-auto">
                <button
                  onClick={() => handleViewDetails(product._id)}
                  className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition flex-1 text-sm font-semibold"
                >
                  View Details
                </button>
                <button
                  onClick={() => handleAddToCartClick(product._id)}
                  className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-lg hover:from-orange-600 hover:to-red-600 transition flex-1 text-sm font-semibold shadow-lg shadow-orange-500/50"
                >
                  Add to Cart
                </button>
              </div>
            </li>
          ))}
        </ul>
        {showLoginModal && (
          <Modal title="Login Required" onClose={handleLoginCancel}>
            <p className="mb-6 text-gray-300">
              To add products to your cart, you need to login first.
            </p>
            <div className="flex justify-center space-x-4">
              <button
                onClick={handleLoginCancel}
                className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleLoginConfirm}
                className="px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg hover:from-orange-600 hover:to-red-600 transition"
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
