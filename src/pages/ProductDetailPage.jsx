import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../redux/cartSlice";
import { API_URL } from "../components/utils";
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
    // No redirect
  };

  const handleIncrease = () => {
    if (qty < product.countInStock) {
      setQty((prev) => prev + 1);
    }
  };

  const handleDecrease = () => {
    if (qty > 1) {
      setQty((prev) => prev - 1);
    }
  };

  if (!product) return <div>Loading...</div>;

  return (
    <div style={{ maxWidth: "600px", margin: "2rem auto" }}>
      <h3>{product.name}</h3>

      {product.image && (
        <img
          src={product.image}
          alt={product.name}
          style={{
            width: "100%",
            maxHeight: "400px",
            objectFit: "cover",
            borderRadius: "8px",
          }}
        />
      )}

      <p>{product.description}</p>
      <p>Price: ₹{product.price}</p>
      <p>Available Stock: {product.countInStock}</p>

      <div style={{ margin: "1rem 0", display: "flex", alignItems: "center" }}>
        <button
          onClick={handleDecrease}
          disabled={qty <= 1}
          style={{
            padding: "0.25rem 0.75rem",
            marginRight: "0.5rem",
            cursor: "pointer",
          }}
        >
          −
        </button>
        <span style={{ minWidth: "30px", textAlign: "center" }}>{qty}</span>
        <button
          onClick={handleIncrease}
          disabled={qty >= product.countInStock}
          style={{
            padding: "0.25rem 0.75rem",
            marginLeft: "0.5rem",
            cursor: "pointer",
          }}
        >
          +
        </button>
      </div>

      <button
        onClick={handleAddToCart}
        disabled={product.countInStock === 0}
        className="addtocart"
      >
        Add to Cart
      </button>

      {user && user.isAdmin && (
        <div style={{ marginTop: "1rem" }}>
          <Link
            to={`/products/${product._id}/edit`}
            style={{
              display: "inline-block",
              padding: "0.5rem 1rem",
              backgroundColor: "#007bff",
              color: "#fff",
              borderRadius: "4px",
              textDecoration: "none",
            }}
          >
            Edit Product
          </Link>
        </div>
      )}

      <div style={{ marginTop: "1rem" }}>
        <Link to="/products">← Back to Products</Link>
      </div>
    </div>
  );
}

export default ProductDetailPage;
