import { FaReact } from "react-icons/fa";

function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <FaReact className="text-cyan-400 text-3xl animate-spin-slow" />
      <h1 className="text-2xl font-bold">React Shop</h1>

      {/* <span className="text-xl font-bold text-gray-800">React Shop</span> */}
    </div>
  );
}

export default Logo;
