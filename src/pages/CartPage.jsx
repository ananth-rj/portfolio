import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCart } from "../redux/cartSlice";

export default function CartPage() {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  return (
    <div>
      {cartItems.map((item) => (
        <div key={item._id}>
          {item.product?.name} - Qty: {item.qty}
        </div>
      ))}
    </div>
  );
}
