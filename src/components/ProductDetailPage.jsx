import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../redux/cartSlice";
import { API_URL } from "./utils";
import { toast } from "react-toastify";

function ProductDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [product, setProduct] = useState(null);
  const [qty, setQty] = useState(1);

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await fetch(`${API_URL}/api/products/${id}`);
        if (!res.ok) {
          navigate("/products");
          return;
        }
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.error("Failed to fetch product:", error);
      }
    };
    getProduct();
  }, [id, navigate]);

  const handleAddToCart = () => {
    if (!user) {
      navigate("/login");
      return;
    }
    dispatch(addItemToCart({ productId: product._id, qty }));
    toast.success("Item added to cart!");
  };

  const handleIncrease = () => {
    if (qty < product.countInStock) setQty(qty + 1);
  };

  const handleDecrease = () => {
    if (qty > 1) setQty(qty - 1);
  };

  if (!product) return <div className="text-center py-10">Loading...</div>;

  return (
    <div className="flex item-center justify center">
      <div className="max-w-lg p-6 bg-white rounded-lg shadow-md">
        {product.image && (
          <div className="w-full h-80 bg-gray-200 flex items-center justify-center rounded-md mb-6">
            <img
              src={product.image}
              alt={product.name}
              className="max-h-full max-w-full object-contain"
            />
          </div>
        )}
        <h3 className="text-2xl font-semibold mb-4 text-gray-800">
          {product.name}
        </h3>
        <p className="mb-4 text-gray-700">{product.description}</p>

        <p className="font-semibold text-lg mb-1">Price: ₹{product.price}</p>
        <p className="text-sm text-gray-600 mb-6">
          Available Stock: {product.countInStock}
        </p>

        <div className="flex items-center mb-6">
          <button
            onClick={handleDecrease}
            disabled={qty <= 1}
            className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
          >
            −
          </button>
          <span className="mx-4 min-w-[30px] text-center text-lg font-medium">
            {qty}
          </span>
          <button
            onClick={handleIncrease}
            disabled={qty >= product.countInStock}
            className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
          >
            +
          </button>
        </div>

        <button
          onClick={handleAddToCart}
          disabled={product.countInStock === 0}
          className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white py-2 rounded font-semibold transition"
        >
          Add to Cart
        </button>

        {user?.isAdmin && (
          <div className="mt-6">
            <Link
              to={`/products/${product._id}/edit`}
              className="inline-block bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded transition"
            >
              Edit Product
            </Link>
          </div>
        )}

        <div className="mt-6">
          <Link to="/products" className="text-blue-600 hover:underline">
            ← Back
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailPage;
