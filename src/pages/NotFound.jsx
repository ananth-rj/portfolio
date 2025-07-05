import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <h2 className="text-6xl font-extrabold text-red-600 mb-4">404</h2>
      <p className="text-2xl font-semibold mb-6 text-gray-800">
        Oops! Page Not Found
      </p>
      <p className="mb-8 text-gray-600 max-w-md text-center">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Go back home
      </Link>
    </div>
  );
}
