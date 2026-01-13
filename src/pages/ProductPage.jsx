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
    <div className="bg-gray-900 min-h-screen w-full">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 xl:px-24 py-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-2">
              Our Products
            </h1>
            <p className="text-gray-400 text-sm md:text-base">
              Discover amazing products at unbeatable prices
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-gray-200 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent cursor-pointer"
            >
              <option value="default" className="bg-gray-800">Sort by (Default)</option>
              <option value="asc" className="bg-gray-800">Price: Low to High</option>
              <option value="desc" className="bg-gray-800">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Products Grid */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6">
          {sortedProducts.map((product) => (
            <li
              key={product._id}
              className="group bg-gray-800 border border-gray-700/50 rounded-xl shadow-lg hover:shadow-2xl hover:border-orange-500/30 transition-all duration-300 overflow-hidden flex flex-col h-full hover:-translate-y-1"
            >
              {/* Product Image */}
              <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 p-6 min-h-[240px] flex items-center justify-center overflow-hidden">
                {product.image ? (
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-w-full max-h-[220px] object-contain transition-transform duration-300 group-hover:scale-110"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      const placeholder = e.target.parentElement.querySelector('.image-placeholder');
                      if (placeholder) placeholder.classList.remove('hidden');
                    }}
                  />
                ) : null}
                <div className="hidden image-placeholder items-center justify-center text-gray-500 text-sm">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gray-700 rounded-lg mx-auto mb-2 flex items-center justify-center">
                      <span className="text-2xl">📦</span>
                    </div>
                    <p className="text-xs">No Image</p>
                  </div>
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>

              {/* Product Info */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-white mb-3 line-clamp-2 min-h-[3.5rem]">
                  {product.name}
                </h3>
                
                {/* Price */}
                <div className="mb-4">
                  <p className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
                    ₹{typeof product.price === 'number' ? product.price.toLocaleString('en-IN') : product.price}
                  </p>
                </div>

                {/* Buttons */}
                <div className="flex flex-col gap-2.5 mt-auto">
                  <button
                    onClick={() => handleViewDetails(product._id)}
                    className="w-full bg-gray-700/50 hover:bg-gray-700 text-white px-4 py-2.5 rounded-lg transition-all duration-200 text-sm font-semibold border border-gray-600 hover:border-gray-500"
                  >
                    View Details
                  </button>
                  <button
                    onClick={() => handleAddToCartClick(product._id)}
                    className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-4 py-2.5 rounded-lg transition-all duration-200 text-sm font-bold shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/40 transform hover:scale-[1.02]"
                  >
                    Add to Cart
                  </button>
                </div>
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
