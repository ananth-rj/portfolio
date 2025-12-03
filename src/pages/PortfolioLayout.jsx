import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { FaHome, FaUser, FaFolderOpen, FaEnvelope, FaCode } from "react-icons/fa";

function PortfolioLayout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <Link to="/" onClick={() => setMobileOpen(false)} className="flex items-center gap-2">
            <FaCode className="text-2xl" />
            <span className="text-xl font-bold">ANANTHARAJ V</span>
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
                  to="/"
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
                  to="/about"
                  className={({ isActive }) =>
                    isActive
                      ? "text-yellow-300 font-semibold border-b-2 border-yellow-300 pb-1 flex items-center gap-1"
                      : "hover:text-yellow-300 transition flex items-center gap-1"
                  }
                >
                  <FaUser /> About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/projects"
                  className={({ isActive }) =>
                    isActive
                      ? "text-yellow-300 font-semibold border-b-2 border-yellow-300 pb-1 flex items-center gap-1"
                      : "hover:text-yellow-300 transition flex items-center gap-1"
                  }
                >
                  <FaFolderOpen /> Projects
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive
                      ? "text-yellow-300 font-semibold border-b-2 border-yellow-300 pb-1 flex items-center gap-1"
                      : "hover:text-yellow-300 transition flex items-center gap-1"
                  }
                >
                  <FaEnvelope /> Contact
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>

        {/* Mobile Nav Drawer */}
        <nav
          className={`
            fixed left-0 bottom-0 w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white transform
            ${mobileOpen ? "translate-y-0" : "translate-y-full"}
            transition-transform duration-300 ease-in-out md:hidden z-50 rounded-t-lg
            shadow-lg
          `}
          style={{ maxHeight: "60vh", overflowY: "auto" }}
        >
          <ul className="flex flex-col space-y-4 text-lg p-6">
            <li>
              <NavLink
                to="/"
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
                to="/about"
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  (isActive
                    ? "text-yellow-300 font-semibold border-b-2 border-yellow-300 pb-1 "
                    : "hover:text-yellow-300 transition ") +
                  "flex items-center gap-2"
                }
              >
                <FaUser />
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  (isActive
                    ? "text-yellow-300 font-semibold border-b-2 border-yellow-300 pb-1 "
                    : "hover:text-yellow-300 transition ") +
                  "flex items-center gap-2"
                }
              >
                <FaFolderOpen />
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  (isActive
                    ? "text-yellow-300 font-semibold border-b-2 border-yellow-300 pb-1 "
                    : "hover:text-yellow-300 transition ") +
                  "flex items-center gap-2"
                }
              >
                <FaEnvelope />
                Contact
              </NavLink>
            </li>
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

      <main className="flex-grow">
        <Outlet />
      </main>

      <footer className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-6 mt-auto">
        <div className="container mx-auto px-4">
          <p className="mb-2">&copy; {new Date().getFullYear()} Anantharaj V. All rights reserved.</p>
          <div className="flex justify-center gap-4 text-sm">
            <a href="https://linkedin.com/in/ananth-reactdev" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 transition">
              LinkedIn
            </a>
            <span>•</span>
            <a href="https://github.com/ananth-rj" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 transition">
              GitHub
            </a>
            <span>•</span>
            <a href="mailto:ananthofficemail@gmail.com" className="hover:text-yellow-300 transition">
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default PortfolioLayout;


