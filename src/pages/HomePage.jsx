import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  FaShoppingBag,
  FaTruck,
  FaShieldAlt,
  FaHeadset,
  FaTag,
  FaFire,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";

function HomePage() {
  const { user, isLoading } = useSelector((state) => state.auth);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-40 text-gray-500 text-lg">
        Loading...
      </div>
    );
  }

  const benefits = [
    {
      icon: <FaTruck className="text-2xl" />,
      text: "Free Shipping on orders over ₹500",
    },
    {
      icon: <FaShieldAlt className="text-2xl" />,
      text: "100% Secure Payment Gateway",
    },
    {
      icon: <FaCheckCircle className="text-2xl" />,
      text: "Easy Returns & Exchanges",
    },
    {
      icon: <FaHeadset className="text-2xl" />,
      text: "Dedicated Customer Support",
    },
  ];

  const categories = [
    { name: "Electronics", color: "from-orange-500 to-red-500", icon: "📱" },
    { name: "Fashion", color: "from-pink-500 to-rose-500", icon: "👕" },
    {
      name: "Home & Living",
      color: "from-amber-500 to-orange-500",
      icon: "🏠",
    },
    { name: "Sports", color: "from-green-500 to-emerald-500", icon: "⚽" },
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section - Dark with Orange/Red accents */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.05)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px]"></div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-orange-500 rounded-full mix-blend-screen opacity-20 blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 left-20 w-64 h-64 bg-red-500 rounded-full mix-blend-screen opacity-20 blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>

        <div className="relative w-full py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 xl:px-24">
            <div className="inline-block mb-4 px-4 py-2 bg-orange-500/20 border border-orange-500/50 rounded-full text-orange-400 text-sm font-semibold">
              <FaFire className="inline mr-2" /> New Arrivals Every Week
            </div>

            <h1 className="text-5xl md:text-7xl font-black mb-4 text-white leading-tight">
              {user ? (
                <>
                  Hey{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
                    {user.name}
                  </span>
                  ! 👋
                </>
              ) : (
                <>
                  Shop{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
                    Smart.
                  </span>
                  <br />
                  Shop{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
                    Fast.
                  </span>
                  <br />
                  Shop{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
                    Now.
                  </span>
                </>
              )}
            </h1>

            <p className="text-lg md:text-xl mb-6 text-gray-300 leading-relaxed max-w-3xl">
              {user
                ? "Your favorite products are waiting. Browse our latest collection and grab the best deals!"
                : "Discover thousands of products at unbeatable prices. Join millions of happy shoppers today."}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                to="/ecommerce/products"
                className="group relative px-10 py-5 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold text-lg rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-2xl shadow-orange-500/50"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Start Shopping
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </Link>
              {!user && (
                <Link
                  to="/ecommerce/auth"
                  className="px-10 py-5 bg-gray-800 border-2 border-gray-700 text-white font-bold text-lg rounded-lg hover:bg-gray-700 hover:border-gray-600 transition-all duration-300"
                >
                  Create Account
                </Link>
              )}
            </div>

            {/* Benefits Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-4 text-center hover:bg-gray-800 transition-colors"
                >
                  <div className="text-orange-500 mb-2 flex justify-center">
                    {benefit.icon}
                  </div>
                  <p className="text-sm text-gray-300">{benefit.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-gray-800 w-full">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 xl:px-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Shop by Category
            </h2>
            <p className="text-xl text-gray-400">
              Find exactly what you're looking for
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Link
                key={index}
                to="/ecommerce/products"
                className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${category.color} p-8 text-white transform hover:scale-105 transition-all duration-300 shadow-xl`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-90`}
                ></div>
                <div className="relative z-10 text-center">
                  <div className="text-5xl mb-4">{category.icon}</div>
                  <h3 className="text-2xl font-bold">{category.name}</h3>
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-sm flex items-center justify-center gap-1">
                      Explore <FaArrowRight className="text-xs" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Dark Cards */}
      <section className="py-20 bg-gray-900 w-full">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 xl:px-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Why Choose Us?
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              We're not just another store. We're your shopping partner.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 border border-gray-700 rounded-xl p-8 hover:border-orange-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-6">
                <FaTag className="text-2xl text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Best Prices
              </h3>
              <p className="text-gray-400 leading-relaxed">
                We guarantee the best prices on all products. If you find it
                cheaper elsewhere, we'll match it.
              </p>
            </div>

            <div className="bg-gray-800 border border-gray-700 rounded-xl p-8 hover:border-orange-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-6">
                <FaTruck className="text-2xl text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Lightning Fast
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Same-day shipping available. Get your orders delivered faster
                than ever before.
              </p>
            </div>

            <div className="bg-gray-800 border border-gray-700 rounded-xl p-8 hover:border-orange-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-6">
                <FaShoppingBag className="text-2xl text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Huge Selection
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Browse through thousands of products across multiple categories.
                Something for everyone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Dark with Orange accent */}
      <section className="py-20 bg-gradient-to-r from-gray-800 to-gray-900 w-full">
        <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-16 xl:px-24 text-center">
          <div className="bg-gray-800 border-2 border-orange-500/50 rounded-3xl p-12 md:p-16 shadow-2xl">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
              Ready to Shop?
            </h2>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
              Join thousands of satisfied customers. Start your shopping journey
              today and experience the difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/ecommerce/products"
                className="group px-10 py-5 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold text-lg rounded-lg transform hover:scale-105 transition-all duration-300 shadow-xl shadow-orange-500/50 flex items-center justify-center gap-2"
              >
                <span>Browse Products</span>
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              {!user && (
                <Link
                  to="/ecommerce/auth"
                  className="px-10 py-5 bg-gray-700 border-2 border-gray-600 text-white font-bold text-lg rounded-lg hover:bg-gray-600 transition-all duration-300"
                >
                  Sign Up Now
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
