import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Portfolio pages
import PortfolioLayout from "./pages/PortfolioLayout";
import PortfolioHome from "./pages/PortfolioHome";
import PortfolioAbout from "./pages/PortfolioAbout";
import PortfolioProjects from "./pages/PortfolioProjects";
import PortfolioContact from "./pages/PortfolioContact";

// E-commerce pages
import RootLayout from "./pages/RootLayout";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import ProductDetailPage from "./components/ProductDetailPage";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import CartPage from "./pages/CartPage";
import EditProductPage from "./components/EditProductPage";
import AuthPage from "./pages/AuthPage";
import NotFoundPage from "./pages/NotFound";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <PortfolioLayout />,
      children: [
        { index: true, element: <PortfolioHome /> },
        { path: "about", element: <PortfolioAbout /> },
        { path: "projects", element: <PortfolioProjects /> },
        { path: "contact", element: <PortfolioContact /> },
        {
          path: "ecommerce",
          element: <RootLayout />,
          children: [
            { index: true, element: <HomePage /> },
            { path: "products", element: <ProductPage /> },
            { path: "products/:id", element: <ProductDetailPage /> },
            { path: "products/:id/edit", element: <EditProductPage /> },
            { path: "signup", element: <SignUp /> },
            { path: "login", element: <Login /> },
            { path: "cart", element: <CartPage /> },
            { path: "auth", element: <AuthPage /> },
          ],
        },
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
