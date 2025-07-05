import { Link, NavLink, Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Logout from "./Logout";
import { fetchCart, clearCart } from "../redux/cartSlice";

function RootLayout() {
  const { user } = useSelector((state) => state.auth);
  const { cartItems } = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  useEffect(() => {
    if (user) {
      dispatch(fetchCart());
    } else {
      dispatch(clearCart());
    }
  }, [user, dispatch]);
  useEffect(() => {
    console.log("Cart updated. Items in cart:", cartItems.length);
  }, [cartItems]);

  return (
    <div>
      <div>
        <h3>React Shop</h3>
      </div>
      <div>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="products">Products</NavLink>
          </li>
          {/* <li><NavLink to="about">About</NavLink></li> */}
          {!user && (
            <>
              <li>
                <NavLink to="signup">SignUp</NavLink>
              </li>
              <li>
                <NavLink to="login">Login</NavLink>
              </li>
            </>
          )}

          {user && (
            <>
              <li>
                <NavLink to="cart">Cart {cartItems.length}</NavLink>
              </li>
              <li>
                <Logout />
              </li>
            </>
          )}
        </ul>
      </div>
      <Outlet />
    </div>
  );
}

export default RootLayout;
