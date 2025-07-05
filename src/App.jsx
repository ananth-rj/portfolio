import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import AboutPage from "./pages/AboutPage";
import ProductDetailPage from "./components/ProductDetailPage";
import RootLayout from "./pages/RootLayout";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import { ToastContainer } from "react-toastify";
import NotFoundPage from "./pages/NotFound";
import CartPage from "./pages/CartPage";
import EditProductPage from "./components/EditProductPage";
import AuthPage from "./pages/AuthPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "products", element: <ProductPage /> },
        { path: "products/:id", element: <ProductDetailPage /> },
        { path: "products/:id/edit", element: <EditProductPage /> },
        { path: "about", element: <AboutPage /> },
        { path: "signup", element: <SignUp /> },
        { path: "login", element: <Login /> },
        { path: "cart", element: <CartPage /> },
        { path: "auth", element: <AuthPage /> },

        { path: "*", element: <NotFoundPage /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer
        position="bottom-center" // show toast at bottom center
        autoClose={3000} // auto close after 3 seconds
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;
