import axios from "axios";
import { API_URL } from "../components/utils";

// Register user
const register = async (userData) => {
  try {
    const response = await axios.post(
      API_URL + "/api/users/register",
      userData
    );
    if (response?.data) {
      localStorage.setItem("user", JSON.stringify(response.data));
      return response.data;
    }
  } catch (error) {
    const message =
      error.response?.data?.message || error.message || "Registration failed";
    throw new Error(message);
  }
};

// Login user
const login = async (userData) => {
  try {
    const response = await axios.post(API_URL + "/api/users/login", userData);
    if (response?.data) {
      localStorage.setItem("user", JSON.stringify(response.data));
      return response.data;
    }
  } catch (error) {
    const message =
      error.response?.data?.message || error.message || "Login failed";
    throw new Error(message);
  }
};

// Logout user
const logout = () => localStorage.removeItem("user");

const authService = {
  register,
  logout,
  login,
};

export default authService;
