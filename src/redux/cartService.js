import axios from "axios";
import { apiUrl } from "../components/utils";

const getCart = async (token) => {
  const res = await axios.get(apiUrl("/api/cart"), {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

const addToCart = async (productId, qty, token) => {
  const res = await axios.post(
    apiUrl("/api/cart"),
    { productId, qty },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return res.data;
};

const updateCartItem = async (itemId, qty, token) => {
  const res = await axios.put(
    apiUrl(`/api/cart/${itemId}`),
    { qty },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return res.data;
};

const removeFromCart = async (itemId, token) => {
  const res = await axios.delete(apiUrl(`/api/cart/${itemId}`), {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

const clearCart = async (token) => {
  const res = await axios.delete(apiUrl("/api/cart"), {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};
const cartService = {
  getCart,
  addToCart,
  updateCartItem,
  removeFromCart,
  clearCart,
};

export default cartService;
