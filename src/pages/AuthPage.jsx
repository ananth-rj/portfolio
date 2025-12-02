import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login, register } from "../redux/authSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function AuthPage() {
  const [isLogin, setIsLogin] = useState(true); // toggle login/signup

  // Login form data
  const [loginData, setLoginData] = useState({ email: "", password: "" });

  // Signup form data
  const [signUpData, setSignUpData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Global auth state
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  // Handle changes in login form inputs
  const onLoginChange = (e) => {
    setLoginData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Handle changes in signup form inputs
  const onSignUpChange = (e) => {
    setSignUpData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Login form submit
  const onLoginSubmit = (e) => {
    e.preventDefault();
    dispatch(login(loginData));
  };

  // Signup form submit
  const onSignUpSubmit = (e) => {
    e.preventDefault();
    const { name, email, password } = signUpData;
    if (!name || !email || !password) {
      toast.warning("Please fill all the fields");
      return;
    }
    dispatch(register(signUpData));
  };

  // React to auth state changes
  useEffect(() => {
    if (isSuccess || user) {
      navigate("/ecommerce");
      return;
    }
    if (isError) {
      toast.error(message);
    }
  }, [isError, isSuccess, user, navigate, message]);

  return (
    <div className="max-w-md mx-auto mt-16 p-6 bg-white rounded shadow-md">
      {isLogin ? (
        <>
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Login</h3>
          <p className="mb-6 text-gray-600">Login to start shopping</p>
          <form onSubmit={onLoginSubmit} className="space-y-5">
            <input
              type="email"
              name="email"
              value={loginData.email}
              onChange={onLoginChange}
              placeholder="Enter your email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              name="password"
              value={loginData.password}
              onChange={onLoginChange}
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
            <button
              onClick={() => setIsLogin(false)}
              className="text-blue-600 hover:underline font-semibold"
            >
              Create new account
            </button>
          </p>
        </>
      ) : (
        <>
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Sign Up</h3>
          <form onSubmit={onSignUpSubmit} className="space-y-5">
            <input
              type="text"
              name="name"
              value={signUpData.name}
              onChange={onSignUpChange}
              placeholder="Enter your name"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              name="email"
              value={signUpData.email}
              onChange={onSignUpChange}
              placeholder="Enter your email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              name="password"
              value={signUpData.password}
              onChange={onSignUpChange}
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
              {isLoading ? "Signing up..." : "Sign Up"}
            </button>
          </form>
          <p className="mt-6 text-center text-gray-600">
            Already have an account?{" "}
            <button
              onClick={() => setIsLogin(true)}
              className="text-blue-600 hover:underline font-semibold"
            >
              Login here
            </button>
          </p>
        </>
      )}
    </div>
  );
}

export default AuthPage;
