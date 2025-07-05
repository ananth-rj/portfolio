import { useSelector } from "react-redux";

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
        Welcome to Our Store
      </h1>
      <p className="text-xl text-gray-700 mb-2">
        Hello {user ? user.name : "Guest"} 👋
      </p>
      <p className="text-gray-600 mb-4">
        This is a modern and fully functional e-commerce platform built with
        React and Redux Toolkit. You can explore products, manage your cart, and
        enjoy a smooth shopping experience.
      </p>

      <div className="bg-gray-50 p-4 rounded border border-gray-200">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">Tech Stack</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>⚛️ React 19 + React Router v7</li>
          <li>🛠️ Redux Toolkit for state management</li>
          <li>🎨 Tailwind CSS for styling</li>
          <li>🌐 Axios for API calls</li>
          <li>🔥 Toastify for user notifications</li>
          <li>🚀 Powered by Vite for fast builds</li>
        </ul>
      </div>
    </div>
  );
}

export default HomePage;
