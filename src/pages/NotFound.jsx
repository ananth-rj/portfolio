import { Link } from "react-router-dom";
import { FaHome, FaExclamationTriangle } from "react-icons/fa";

export default function NotFoundPage() {
  return (
    <div className="relative min-h-[80vh] flex flex-col items-center justify-center bg-slate-950 text-slate-100 overflow-hidden bg-grid-pattern p-6">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 glass-card p-10 sm:p-14 rounded-3xl border border-slate-800 text-center max-w-lg shadow-2xl space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 text-3xl mx-auto">
          <FaExclamationTriangle />
        </div>

        <h1 className="text-7xl font-extrabold text-gradient">404</h1>

        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-white">Page Not Found</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            The page you are looking for does not exist, has been removed, or is temporarily unavailable.
          </p>
        </div>

        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white px-7 py-3.5 rounded-xl font-bold text-sm transition-all shadow-lg shadow-indigo-600/30"
        >
          <FaHome /> Return to Home
        </Link>
      </div>
    </div>
  );
}
