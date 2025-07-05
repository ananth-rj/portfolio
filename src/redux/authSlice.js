import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  user: user || null,
  isLoading: false,
  isCheckingAuth: true,
  isError: false,
  isSuccess: false,
  message: "",
};

export const register = createAsyncThunk(
  "auth/register",
  async (user, thunkAPI) => {
    try {
      return await authService.register(user);
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || error.message || "Registration failed"
      );
    }
  }
);

export const login = createAsyncThunk("auth/login", async (user, thunkAPI) => {
  try {
    return await authService.login(user);
  } catch (error) {
    return thunkAPI.rejectWithValue(
      error.response?.data?.message || error.message || "Login failed"
    );
  }
});

export const logout = createAsyncThunk("auth/logout", async () => {
  await authService.logout();
});
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logouts: (state) => {
      authService.logout();
      state.user = null;
      state.isSuccess = false;
      state.isError = false;
      state.message = "Logged out";
    },
  },
  extraReducers: (builder) => {
    builder
      //register
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
        state.message = "Registered Successfully";
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload || "Something went wrong";
        state.user = null;
      })
      //Login
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
        state.message = "Logged Successfully";
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload || "Something went wrong";
        state.user = null;
      })
      //Logout
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
      });
  },
});
// export const { logout } = authSlice.actions;
export default authSlice.reducer;
