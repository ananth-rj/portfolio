import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import cartService from "./cartService";

const initialState = {
  cartItems: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};

export const fetchCart = createAsyncThunk("cart/fetch", async (_, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.user?.token;
    return await cartService.getCart(token);
  } catch (error) {
    return thunkAPI.rejectWithValue(
      error.response?.data?.message || error.message || "Failed to fetch cart"
    );
  }
});

export const addItemToCart = createAsyncThunk(
  "cart/add",
  async ({ productId, qty }, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user?.token;
      return await cartService.addToCart(productId, qty, token);
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message ||
          error.message ||
          "Failed to add to cart"
      );
    }
  }
);

export const updateItemInCart = createAsyncThunk(
  "cart/update",
  async ({ itemId, qty }, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user?.token;
      return await cartService.updateCartItem(itemId, qty, token);
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message ||
          error.message ||
          "Failed to update cart"
      );
    }
  }
);

export const removeItemFromCart = createAsyncThunk(
  "cart/remove",
  async (itemId, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user?.token;
      return await cartService.removeFromCart(itemId, token);
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message ||
          error.message ||
          "Failed to remove from cart"
      );
    }
  }
);
export const clearCartFromBackend = createAsyncThunk(
  "cart/clearAll",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user?.token;
      return await cartService.clearCart(token);
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || error.message || "Failed to clear cart"
      );
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    resetCart: (state) => initialState,
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.cartItems = action.payload.cartItems || [];
      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload || "Failed to fetch cart";
      })
      .addCase(addItemToCart.fulfilled, (state, action) => {
        state.isSuccess = true;
        state.cartItems = action.payload.cartItems || [];
      })
      .addCase(updateItemInCart.fulfilled, (state, action) => {
        state.isSuccess = true;
        const updatedItem = action.meta.arg;
        const itemIndex = state.cartItems.findIndex(
          (item) => item._id === updatedItem.itemId
        );
        if (itemIndex !== -1) {
          state.cartItems[itemIndex].qty = updatedItem.qty;
        }
      })
      .addCase(removeItemFromCart.fulfilled, (state, action) => {
        state.isSuccess = true;
        const removedId = action.meta.arg;
        state.cartItems = state.cartItems.filter(
          (item) => item._id !== removedId
        );
      })
      .addCase(clearCartFromBackend.fulfilled, (state) => {
        state.cartItems = [];
        state.isSuccess = true;
      });
  },
});

export const { resetCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
