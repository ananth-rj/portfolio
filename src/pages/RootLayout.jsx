import { Link, NavLink, Outlet } from "react-router-dom";
import Logout from "./Logout";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function RootLayout() {
  const { user } = useSelector((state) => state.auth);
  const { cartItems } = useSelector((state) => state.cart);

  useEffect(() => {
    console.log("Cart updated. Items in cart:", cartItems.length);
  }, [cartItems]);

  return (
    <div>
      <div>
        <h3>React Shop</h3>
      </div>
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="products">Products</NavLink>
        <NavLink to="about">About</NavLink>

        {!user && <NavLink to="signup">SignUp</NavLink>}
        {!user && <NavLink to="login">Login</NavLink>}

        <NavLink to="cart">Cart {cartItems.length}</NavLink>

        {user && <Logout />}
      </div>
      <Outlet />
    </div>
  );
}

export default RootLayout;
