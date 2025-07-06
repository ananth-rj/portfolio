import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { login } from "../redux/authSlice";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { email, password } = formData;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(login(formData));
  };

  useEffect(() => {
    if (isSuccess || user) {
      navigate("/");
      return;
    }
    if (isError) {
      toast.error(message);
    }
  }, [isError, isSuccess, user, navigate, message]);

  return (
    <div className="max-w-md mx-auto mt-16 p-6 bg-white rounded shadow-md">
      <h3 className="text-2xl font-semibold mb-4 text-gray-800">Login</h3>
      <p className="mb-6 text-gray-600">Login to start shopping</p>

      <form onSubmit={onSubmit} className="space-y-5">
        <input
          type="email"
          name="email"
          value={email}
          onChange={onChange}
          placeholder="Enter your email"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="password"
          name="password"
          value={password}
          onChange={onChange}
          placeholder="Enter your password"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          disabled={isLoading}
          className={`w-full py-2 rounded text-white ${
            isLoading
              ? "bg-blue-300 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          } transition`}
        >
          {isLoading ? "Logging in..." : "Login"}
        </button>
      </form>
      <p className="mt-6 text-center text-gray-600">
        Don't have an account?{" "}
        <Link
          to="/signup"
          className="text-blue-600 hover:underline font-semibold"
        >
          Create new account
        </Link>
      </p>
    </div>
  );
}

export default Login;
