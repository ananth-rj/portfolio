import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { register } from "../redux/authSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = formData;
  const dispatch = useDispatch();
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );
  const navigate = useNavigate();
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (name && email && password == "") {
      toast.warning("Please fill all the fields");
    } else {
      dispatch(register(formData));
      navigate("/");
    }
  };
  return (
    <div>
      <h3>Sign Up</h3>
      <form onSubmit={onSubmit}>
        <input type="text" name="name" value={name} onChange={onChange} />
        <input type="email" name="email" value={email} onChange={onChange} />
        <input
          type="password"
          name="password"
          value={password}
          onChange={onChange}
        />
        <button>Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
