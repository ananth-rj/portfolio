import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../components/utils";

// Thunk for fetching products
export const fetchProducts = createAsyncThunk(
  "products/fetchAll",
  async (_, thunkAPI) => {
    try {
      const url = `${API_URL}/api/products`;
      console.log("Fetching products from:", url);
      const res = await axios.get(url);
      console.log("Products response:", res.data);
      return res.data;
    } catch (error) {
      console.error("Error fetching products:", error);
      console.error("API_URL was:", API_URL);
      console.error("Full error:", error.response || error.message);
      return thunkAPI.rejectWithValue(
        error.response?.data?.message ||
          error.message ||
          "Failed to fetch products"
      );
    }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    isLoading: false,
    isError: false,
    isSuccess: false,
    message: "",
  },
  reducers: {
    resetProducts: (state) => {
      state.products = [];
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        // Handle both array response and object with products property
        state.products = Array.isArray(action.payload) 
          ? action.payload 
          : (action.payload?.products || []);
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { resetProducts } = productsSlice.actions;

export default productsSlice.reducer;
