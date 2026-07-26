import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { FaHome, FaUser, FaFolderOpen, FaEnvelope, FaCode, FaGithub, FaLinkedin } from "react-icons/fa";

function PortfolioLayout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Scroll to top on route change & track scroll position for header blur
  useEffect(() => {
    window.scrollTo(0, 0);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const navItems = [
    { path: "/", label: "Home", icon: FaHome, end: true },
    { path: "/about", label: "About", icon: FaUser, end: false },
    { path: "/projects", label: "Projects", icon: FaFolderOpen, end: false },
    { path: "/contact", label: "Contact", icon: FaEnvelope, end: false },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 font-sans">
      {/* Sticky Glassmorphic Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? "glass-nav shadow-2xl py-3" : "bg-slate-950/80 backdrop-blur-md border-b border-slate-800/50 py-4"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo Badge */}
          <Link
            to="/"
            onClick={() => setMobileOpen(false)}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center text-white shadow-lg shadow-indigo-500/25 group-hover:scale-105 transition-transform">
              <FaCode className="text-xl" />
            </div>
            <div>
              <span className="text-xl font-extrabold tracking-tight text-white group-hover:text-indigo-400 transition-colors">
                ANANTHARAJ V
              </span>
              <span className="block text-xs font-semibold text-indigo-400">
                Frontend Dev
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-md">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.path}>
                    <NavLink
                      to={item.path}
                      end={item.end}
                      className={({ isActive }) =>
                        `flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                          isActive
                            ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-500/20"
                            : "text-slate-300 hover:text-white hover:bg-slate-800/60"
                        }`
                      }
                    >
                      <Icon className="text-base" />
                      <span>{item.label}</span>
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Mobile menu trigger */}
          <button
            className="md:hidden p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white focus:outline-none"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle Menu"
          >
            {mobileOpen ? <HiX className="text-2xl" /> : <HiMenu className="text-2xl" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        <div
          className={`
            fixed inset-x-0 top-[70px] bg-slate-900/95 backdrop-blur-xl border-b border-slate-800
            transition-all duration-300 ease-in-out md:hidden z-40 overflow-hidden
            ${mobileOpen ? "max-h-96 opacity-100 py-4 px-6" : "max-h-0 opacity-0 py-0 px-6"}
          `}
        >
          <ul className="flex flex-col space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    end={item.end}
                    onClick={() => setMobileOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center gap-3 px-4 py-3 rounded-xl text-base font-semibold transition-all ${
                        isActive
                          ? "bg-indigo-600 text-white"
                          : "text-slate-300 hover:bg-slate-800/80 hover:text-white"
                      }`
                    }
                  >
                    <Icon className="text-lg text-indigo-400" />
                    <span>{item.label}</span>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Sleek Footer */}
      <footer className="bg-slate-950 border-t border-slate-800/80 text-slate-400 py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 font-bold text-sm">
                AV
              </div>
              <p className="text-sm font-medium">
                &copy; {new Date().getFullYear()} <span className="text-slate-200">Anantharaj V</span>. Built with React &amp; Tailwind CSS.
              </p>
            </div>

            <div className="flex items-center space-x-6 text-sm">
              <a
                href="https://linkedin.com/in/ananth-reactdev"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-indigo-400 transition-colors"
              >
                <FaLinkedin /> LinkedIn
              </a>
              <a
                href="https://github.com/ananth-rj"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-indigo-400 transition-colors"
              >
                <FaGithub /> GitHub
              </a>
              <a
                href="mailto:ananthofficemail@gmail.com"
                className="flex items-center gap-2 hover:text-indigo-400 transition-colors"
              >
                <FaEnvelope /> Email
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default PortfolioLayout;
