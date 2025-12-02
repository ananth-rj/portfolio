import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../redux/authSlice";
import { FaSignOutAlt } from "react-icons/fa";

function Logout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/ecommerce/login");
  };

  useEffect(() => {
    if (!user) {
      navigate("/ecommerce");
    }
  }, [user, navigate]);

  if (!user) return null;

  return (
    <button
      onClick={handleLogout}
      className="flex items-center gap-2 text-lg hover:text-yellow-300 transition"
    >
      <FaSignOutAlt /> Logout
    </button>
  );
}

export default Logout;
