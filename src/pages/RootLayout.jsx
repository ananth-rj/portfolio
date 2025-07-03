import { NavLink, Outlet } from "react-router-dom";
import Logout from "./Logout";
import { useSelector } from "react-redux";

function RootLayout() {
  const { user } = useSelector((state) => state.auth);

  return (
    <div>
      <h3>React Shop</h3>
      <NavLink to="/">Home</NavLink>
      <NavLink to="products">Products</NavLink>
      <NavLink to="about">About</NavLink>

      {/* Show only if not logged in */}
      {!user && <NavLink to="signup">SignUp</NavLink>}
      {!user && <NavLink to="login">Login</NavLink>}

      {/* Show logout only if user is logged in */}
      {user && <Logout />}

      <Outlet />
    </div>
  );
}

export default RootLayout;
