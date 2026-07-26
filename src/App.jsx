import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Portfolio pages
import PortfolioLayout from "./pages/PortfolioLayout";
import PortfolioHome from "./pages/PortfolioHome";
import PortfolioAbout from "./pages/PortfolioAbout";
import PortfolioProjects from "./pages/PortfolioProjects";
import PortfolioContact from "./pages/PortfolioContact";
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
        { path: "*", element: <NotFoundPage /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
