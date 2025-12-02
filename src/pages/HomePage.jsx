import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function HomePage() {
  const { user, isLoading } = useSelector((state) => state.auth);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-40 text-gray-500 text-lg">
        Loading...
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6 mt-10 bg-white rounded-xl shadow-lg">
      <h1 className="text-4xl font-bold mb-4 text-gray-800">
        {user ? `Welcome back, ${user.name}!` : "Welcome to React E-Commerce"}
      </h1>
      <p className="text-xl text-gray-700 mb-2">
        {user
          ? "Glad to see you again. Explore our latest products and enjoy seamless shopping!"
          : "Experience a modern, fast, and secure shopping platform built with the latest web technologies."}
      </p>
      <p className="text-gray-600 mb-4">
        This e-commerce site is crafted with React and powerful tools to deliver
        high performance, smooth navigation, and a delightful user experience.
      </p>

      <div className="bg-gray-50 p-4 rounded border border-gray-200">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">
          🚀 Our Tech Stack
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>⚛️ React 19 and React Router v7 for dynamic UI and routing</li>
          <li>🛠️ Redux Toolkit for simplified and scalable state management</li>
          <li>🎨 Tailwind CSS for modern, responsive styling</li>
          <li>🌐 Axios for secure and efficient API requests</li>
          <li>🔥 React Toastify for sleek user notifications</li>
          <li>⚡ Vite for ultra-fast development and builds</li>
        </ul>
      </div>

      <p className="mt-6 text-gray-700">
        Browse products, manage your cart, and enjoy a seamless shopping journey
        powered by cutting-edge technology!
      </p>

      <div className="flex justify-center mt-4 animate-bounce-slow">
        <Link
          to="/ecommerce/products"
          className="bg-orange-400 px-2 py-1 rounded text-center"
        >
          View Products
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
