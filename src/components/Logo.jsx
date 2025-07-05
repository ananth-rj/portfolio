import cart from "../assets/cart.svg";
function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <img src={cart} alt="site-logo" className="w-8 h-8" />
      <h1 className="text-2xl font-bold">React Shop</h1>
    </div>
  );
}

export default Logo;
