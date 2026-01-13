import { FaShoppingBag } from "react-icons/fa";

function Logo() {
  return (
    <div className="flex items-center space-x-3 group cursor-pointer">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg blur-sm opacity-50 group-hover:opacity-75 transition-opacity"></div>
        <div className="relative bg-gradient-to-br from-orange-500 to-red-500 p-2 rounded-lg shadow-lg group-hover:shadow-xl transition-all transform group-hover:scale-105">
          <FaShoppingBag className="text-white text-xl" />
        </div>
      </div>
      <div className="flex flex-col">
        <h1 className="text-xl font-black text-white leading-tight tracking-tight">
          React Shop
        </h1>
        <span className="text-xs text-gray-400 font-medium -mt-1">
          E-Commerce
        </span>
      </div>
    </div>
  );
}

export default Logo;
