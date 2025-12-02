import { Link, NavLink, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HiMenu, HiX } from "react-icons/hi";
import {
  FaHome,
  FaBoxOpen,
  FaShoppingCart,
  FaSignInAlt,
  FaUserPlus,
} from "react-icons/fa";

import Logout from "./Logout";
import Logo from "../components/Logo";
import { fetchCart, clearCart } from "../redux/cartSlice";

function RootLayout() {
  const { user } = useSelector((state) => state.auth);
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [mobileOpen, setMobileOpen] = useState(false);

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
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="bg-blue-700 text-white shadow-md relative">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <Link to="/ecommerce" onClick={() => setMobileOpen(false)}>
            <Logo />
          </Link>

          {/* Hamburger icon on mobile */}
          <button
            className="text-3xl md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle Menu"
          >
            {mobileOpen ? <HiX /> : <HiMenu />}
          </button>

          {/* Desktop navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-6 text-lg">
              <li>
                <NavLink
                  to="/ecommerce"
                  end
                  className={({ isActive }) =>
                    isActive
                      ? "text-yellow-300 font-semibold border-b-2 border-yellow-300 pb-1 flex items-center gap-1"
                      : "hover:text-yellow-300 transition flex items-center gap-1"
                  }
                >
                  <FaHome /> Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/ecommerce/products"
                  className={({ isActive }) =>
                    isActive
                      ? "text-yellow-300 font-semibold border-b-2 border-yellow-300 pb-1 flex items-center gap-1"
                      : "hover:text-yellow-300 transition flex items-center gap-1"
                  }
                >
                  <FaBoxOpen /> Products
                </NavLink>
              </li>

              {user ? (
                <>
                  <li>
                    <NavLink
                      to="/ecommerce/cart"
                      className={({ isActive }) =>
                        isActive
                          ? "text-yellow-300 font-semibold border-b-2 border-yellow-300 pb-1 flex items-center gap-1"
                          : "hover:text-yellow-300 transition flex items-center gap-1"
                      }
                    >
                      <FaShoppingCart />
                      Cart
                      <span className="bg-yellow-300 text-blue-700 rounded-full px-2 ml-1 text-sm font-bold">
                        {cartItems.length}
                      </span>
                    </NavLink>
                  </li>
                  <li>
                    <Logout />
                  </li>
                </>
              ) : (
                <>
                  <li>
                  <NavLink
                    to="/ecommerce/auth"
                    className={({ isActive }) =>
                      isActive
                        ? "text-yellow-300 font-semibold border-b-2 border-yellow-300 pb-1 flex items-center gap-1"
                        : "hover:text-yellow-300 transition flex items-center gap-1"
                    }
                  >
                    <FaSignInAlt /> Login
                  </NavLink>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </div>

        {/* Mobile Nav Drawer */}
        <nav
          className={`
    fixed left-0 bottom-0 w-full bg-blue-700 text-white transform
    ${mobileOpen ? "translate-y-0" : "translate-y-full"}
    transition-transform duration-300 ease-in-out md:hidden z-50 rounded-t-lg
    shadow-lg
  `}
          style={{ maxHeight: "60vh", overflowY: "auto" }}
        >
          <ul className="flex flex-col space-y-4 text-lg p-6">
            <li>
              <NavLink
                to="/ecommerce"
                end
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  (isActive
                    ? "text-yellow-300 font-semibold border-b-2 border-yellow-300 pb-1 "
                    : "hover:text-yellow-300 transition ") +
                  "flex items-center gap-2"
                }
              >
                <FaHome />
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/ecommerce/products"
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  (isActive
                    ? "text-yellow-300 font-semibold border-b-2 border-yellow-300 pb-1 "
                    : "hover:text-yellow-300 transition ") +
                  "flex items-center gap-2"
                }
              >
                <FaBoxOpen />
                Products
              </NavLink>
            </li>

            {user ? (
              <>
                <li>
                  <NavLink
                    to="/ecommerce/cart"
                    onClick={() => setMobileOpen(false)}
                    className={({ isActive }) =>
                      (isActive
                        ? "text-yellow-300 font-semibold border-b-2 border-yellow-300 pb-1 "
                        : "hover:text-yellow-300 transition ") +
                      "flex items-center gap-2"
                    }
                  >
                    <FaShoppingCart />
                    Cart{" "}
                    <span className="bg-yellow-300 text-blue-700 rounded-full px-2 ml-1 text-sm font-bold">
                      {cartItems.length}
                    </span>
                  </NavLink>
                </li>
                <li onClick={() => setMobileOpen(false)}>
                  <Logout />
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink
                    to="/ecommerce/signup"
                    onClick={() => setMobileOpen(false)}
                    className={({ isActive }) =>
                      (isActive
                        ? "text-yellow-300 font-semibold border-b-2 border-yellow-300 pb-1 "
                        : "hover:text-yellow-300 transition ") +
                      "flex items-center gap-2"
                    }
                  >
                    <FaUserPlus />
                    SignUp
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/ecommerce/login"
                    onClick={() => setMobileOpen(false)}
                    className={({ isActive }) =>
                      (isActive
                        ? "text-yellow-300 font-semibold border-b-2 border-yellow-300 pb-1 "
                        : "hover:text-yellow-300 transition ") +
                      "flex items-center gap-2"
                    }
                  >
                    <FaSignInAlt />
                    Login
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </nav>

        {/* Backdrop for mobile menu */}
        {mobileOpen && (
          <div
            className="fixed inset-0 bg-black opacity-50 md:hidden z-40"
            onClick={() => setMobileOpen(false)}
          ></div>
        )}
      </header>

      <main className="container mx-auto flex-grow px-4 py-6">
        <Outlet />
      </main>

      <footer className="bg-blue-700 text-white text-center py-4 mt-auto">
        &copy; {new Date().getFullYear()} React Shop. All rights reserved.
      </footer>
    </div>
  );
}

export default RootLayout;
