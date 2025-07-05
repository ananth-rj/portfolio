import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCart,
  updateItemInCart,
  removeItemFromCart,
  clearCartFromBackend,
} from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";

// Import trash icon from react-icons
import { FaTrash } from "react-icons/fa";

export default function CartPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { cartItems, isLoading } = useSelector((state) => state.cart);

  const [showModal, setShowModal] = useState(false);
  const [showRemoveModal, setShowRemoveModal] = useState(false);
  const [itemToRemove, setItemToRemove] = useState(null);

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  const handleIncrease = (item) => {
    dispatch(updateItemInCart({ itemId: item._id, qty: item.qty + 1 }));
  };

  const handleDecrease = (item) => {
    if (item.qty > 1) {
      dispatch(updateItemInCart({ itemId: item._id, qty: item.qty - 1 }));
    }
  };

  const handleRemoveClick = (item) => {
    setItemToRemove(item);
    setShowRemoveModal(true);
  };

  const confirmRemove = () => {
    if (itemToRemove) {
      dispatch(removeItemFromCart(itemToRemove._id));
    }
    setShowRemoveModal(false);
    setItemToRemove(null);
  };

  const handleCompleteOrder = () => {
    setShowModal(true);
  };

  const confirmOrder = async () => {
    await dispatch(clearCartFromBackend());
    setShowModal(false);
    navigate("/");
  };

  if (isLoading) {
    return (
      <div className="text-center py-10 text-gray-600">
        <Spinner />
      </div>
    );
  }

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + (item.product?.price || 0) * item.qty,
    0
  );

  return (
    <div className="max-w-xl mx-auto p-4 bg-white rounded shadow mt-8">
      {cartItems.length === 0 ? (
        <p className="text-center text-gray-700 text-lg">Your cart is empty.</p>
      ) : (
        <>
          <ul className="divide-y divide-gray-200">
            {cartItems.map((item) => (
              <li
                key={item._id}
                className="py-4 flex justify-between items-center flex-wrap"
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                  <span className="font-medium text-gray-800">
                    {item.product?.name}
                  </span>
                  <div className="flex items-center gap-2 mt-2 sm:mt-0">
                    <button
                      onClick={() => handleDecrease(item)}
                      disabled={item.qty <= 1}
                      className="px-2 py-1 bg-gray-200 rounded disabled:opacity-50"
                    >
                      −
                    </button>
                    <span className="min-w-[30px] text-center text-lg font-semibold">
                      {item.qty}
                    </span>
                    <button
                      onClick={() => handleIncrease(item)}
                      className="px-2 py-1 bg-gray-200 rounded"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="flex items-center gap-3 mt-2 sm:mt-0">
                  <span className="text-gray-600 font-semibold">
                    ₹{item.product?.price}
                  </span>
                  <div></div>
                  <button
                    onClick={() => handleRemoveClick(item)}
                    className="text-red-600 hover:text-red-800 transition"
                    title="Remove item"
                  >
                    <FaTrash size={20} />
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <p className="text-right text-lg font-bold mt-4">
            Total: ₹{totalPrice}
          </p>

          <div className="flex justify-between mt-6 flex-col sm:flex-row gap-4">
            <button
              onClick={() => navigate(-1)}
              className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded transition w-full sm:w-auto"
            >
              ← Back
            </button>

            <button
              onClick={handleCompleteOrder}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition w-full sm:w-auto"
            >
              Complete Order
            </button>
          </div>
        </>
      )}

      {/* Modal for completing order */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Confirm Order</h3>
            <p className="mb-6">Are you sure you want to place your order?</p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 transition"
              >
                Cancel
              </button>
              <button
                onClick={confirmOrder}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              >
                Yes, Place Order
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal for confirming remove */}
      {showRemoveModal && itemToRemove && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Remove Item</h3>
            <p className="mb-6">
              Are you sure you want to remove{" "}
              <span className="font-semibold">
                {itemToRemove.product?.name}
              </span>{" "}
              from your cart?
            </p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => {
                  setShowRemoveModal(false);
                  setItemToRemove(null);
                }}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 transition"
              >
                Cancel
              </button>
              <button
                onClick={confirmRemove}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
              >
                Yes, Remove
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
