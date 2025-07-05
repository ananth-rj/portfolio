import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { login } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";

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
    <div>
      <h3>Login</h3>
      <p>Login to start shopping</p>
      <form onSubmit={onSubmit}>
        <input
          type="email"
          name="email"
          value={email}
          onChange={onChange}
          placeholder="Enter your email"
        />
        <input
          type="text"
          name="password"
          value={password}
          onChange={onChange}
          placeholder="enter your password"
        />
        <button>Login</button>
      </form>
    </div>
  );
}

export default Login;
