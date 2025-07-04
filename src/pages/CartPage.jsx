import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCart, resetCart, clearCartFromBackend } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";

export default function CartPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCart = async () => {
      await dispatch(fetchCart());
      setLoading(false);
    };
    loadCart();
  }, [dispatch]);

  const handleCompleteOrder = async () => {
    await dispatch(clearCartFromBackend());
    alert("Your order is placed.");
    navigate("/");
  };

  if (loading) {
    return <div>Loading cart...</div>;
  }

  return (
    <div>
      {cartItems.length === 0 && <p>Your cart is empty.</p>}

      {cartItems.map((item) => (
        <div key={item._id}>
          {item.product?.name} - Qty: {item.qty}
        </div>
      ))}

      <div style={{ marginTop: "1rem" }}>
        <button onClick={() => navigate(-1)}>← Back to Previous Page</button>
        <button onClick={handleCompleteOrder} style={{ marginLeft: "10px" }}>
          Complete Order
        </button>
      </div>
    </div>
  );
}
