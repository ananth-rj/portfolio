import axios from "axios";
import { API_URL } from "../components/utils";

const getCart = async (token) => {
  const res = await axios.get(`${API_URL}/api/cart`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

const addToCart = async (productId, qty, token) => {
  const res = await axios.post(
    `${API_URL}/api/cart`,
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
    `${API_URL}/api/cart/${itemId}`,
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
  const res = await axios.delete(`${API_URL}/api/cart/${itemId}`, {
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
};

export default cartService;
