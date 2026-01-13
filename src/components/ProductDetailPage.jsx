import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../redux/cartSlice";
import { API_URL } from "./utils";
import { toast } from "react-toastify";
import { FaArrowLeft, FaMinus, FaPlus, FaShoppingCart } from "react-icons/fa";

function ProductDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [product, setProduct] = useState(null);
  const [qty, setQty] = useState(1);

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await fetch(`${API_URL}/api/products/${id}`);
        if (!res.ok) {
          navigate("/ecommerce/products");
          return;
        }
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.error("Failed to fetch product:", error);
      }
    };
    getProduct();
  }, [id, navigate]);

  const handleAddToCart = () => {
    if (!user) {
      navigate("/ecommerce/login");
      return;
    }
    dispatch(addItemToCart({ productId: product._id, qty }));
    toast.success("Item added to cart!");
  };

  const handleIncrease = () => {
    if (qty < product.countInStock) setQty(qty + 1);
  };

  const handleDecrease = () => {
    if (qty > 1) setQty(qty - 1);
  };

  if (!product) {
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
                  <div className="relative flex justify-center items-center py-10">
                    <div
                      className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"
                      role="status"
                      aria-label="Loading"
                    ></div>
                  </div>
                </div>
              </div>

              <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent mb-6">
                Loading Product Details...
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
                <div
                  className="w-3 h-3 bg-orange-500 rounded-full animate-bounce"
                  style={{ animationDelay: "0ms" }}
                ></div>
                <div
                  className="w-3 h-3 bg-red-500 rounded-full animate-bounce"
                  style={{ animationDelay: "150ms" }}
                ></div>
                <div
                  className="w-3 h-3 bg-orange-500 rounded-full animate-bounce"
                  style={{ animationDelay: "300ms" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-900 min-h-screen w-full py-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 xl:px-24">
        {/* Back Button */}
        <Link
          to="/ecommerce/products"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-orange-500 transition-colors mb-6 group"
        >
          <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Back to Products</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Product Image */}
          <div className="w-full flex">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 md:p-12 border border-gray-700 shadow-2xl w-full flex flex-col">
              {product.image ? (
                <div className="w-full flex-1 flex items-center justify-center bg-gray-900 rounded-xl overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              ) : (
                <div className="w-full flex-1 flex items-center justify-center bg-gray-900 rounded-xl">
                  <div className="text-center text-gray-500">
                    <div className="text-6xl mb-4">📦</div>
                    <p className="text-sm">No Image Available</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Product Details */}
          <div className="w-full flex">
            <div className="bg-gray-800 rounded-2xl p-6 md:p-8 border border-gray-700 shadow-xl w-full flex flex-col">
              <h1 className="text-3xl md:text-4xl font-black text-white mb-4">
                {product.name}
              </h1>

              {/* Price */}
              <div className="mb-6">
                <p className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 mb-2">
                  ₹{typeof product.price === 'number' ? product.price.toLocaleString('en-IN') : product.price}
                </p>
                <p className="text-sm text-gray-400">
                  {product.countInStock > 0 ? (
                    <span className="text-green-400 font-semibold">
                      ✓ In Stock ({product.countInStock} available)
                    </span>
                  ) : (
                    <span className="text-red-400 font-semibold">✗ Out of Stock</span>
                  )}
                </p>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h2 className="text-lg font-bold text-white mb-3">Description</h2>
                <p className="text-gray-300 leading-relaxed">{product.description}</p>
              </div>

              {/* Quantity Selector */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-300 mb-3">
                  Quantity
                </label>
                <div className="flex items-center gap-4">
                  <button
                    onClick={handleDecrease}
                    disabled={qty <= 1}
                    className="w-10 h-10 flex items-center justify-center bg-gray-700 hover:bg-gray-600 disabled:bg-gray-800 disabled:text-gray-600 disabled:cursor-not-allowed text-white rounded-lg transition-colors font-bold"
                  >
                    <FaMinus className="text-sm" />
                  </button>
                  <span className="min-w-[60px] text-center text-2xl font-bold text-white">
                    {qty}
                  </span>
                  <button
                    onClick={handleIncrease}
                    disabled={qty >= product.countInStock}
                    className="w-10 h-10 flex items-center justify-center bg-gray-700 hover:bg-gray-600 disabled:bg-gray-800 disabled:text-gray-600 disabled:cursor-not-allowed text-white rounded-lg transition-colors font-bold"
                  >
                    <FaPlus className="text-sm" />
                  </button>
                </div>
              </div>

              {/* Add to Cart Button */}
              <div className="mt-auto">
                <button
                  onClick={handleAddToCart}
                  disabled={product.countInStock === 0}
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 disabled:from-gray-700 disabled:to-gray-700 disabled:cursor-not-allowed text-white py-4 rounded-lg font-bold text-lg transition-all duration-200 shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/40 transform hover:scale-[1.02] disabled:hover:scale-100 flex items-center justify-center gap-2 mb-6"
                >
                  <FaShoppingCart />
                  {product.countInStock === 0 ? "Out of Stock" : "Add to Cart"}
                </button>

                {/* Admin Edit Link */}
                {user?.isAdmin && (
                  <div className="pt-6 border-t border-gray-700">
                    <Link
                      to={`/ecommerce/products/${product._id}/edit`}
                      className="inline-block bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg transition-colors font-semibold"
                    >
                      Edit Product
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailPage;
