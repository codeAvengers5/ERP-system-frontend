"use client";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { setMessage } from "./message";
import authService from "../services/auth.service";
import authHeader from "@/services/auth-header";

export const register = createAsyncThunk(
  "auth/register",
  async (formData, thunkAPI) => {
    try {
      const response = await authService.register(formData);
      thunkAPI.dispatch(setMessage(response.data.message));
      return response.data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue(error.response.data.error);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }, thunkAPI) => {
    try {
      const data = await authService.login(email, password);
      return { data };
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      // Dispatching the error message to setMessage action
      thunkAPI.dispatch(setMessage(message));
      // Returning the rejected value along with the error message
      return thunkAPI.rejectWithValue(error.response.data.Error);
    }
  }
);

export const initializeUserFromCookie = createAsyncThunk(
  "auth/initializeUserFromCookie",
  async (_, thunkAPI) => {
    const userCookie = authHeader();
    if (userCookie) {
      try {
        return userCookie.user.userInfo;
      } catch (error) {
        // Handle any potential errors during decoding or parsing
        console.error("Error parsing user cookie:", error);
      }
    }
    return null;
  }
);

export const fetchUserData = createAsyncThunk(
  "auth/fetchUser",
  async (_, thunkAPI) => {
    try {
      const data = await authService.fetchUserData();
      return data;
    } catch (error) {
      throw new Error(error.message || "Failed to fetch user data");
    }
  }
);

export const enable2FA = createAsyncThunk(
  "auth/enable2FA",
  async ({ Id }, thunkAPI) => {
    try {
      const data = await authService.enable2FA({ Id });
      thunkAPI.dispatch(setMessage(data.message));
      return data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue();
    }
  }
);

export const forgotPassword = createAsyncThunk(
  "auth/forgotpassword",
  async (email, thunkAPI) => {
    try {
      const data = await authService.forgotPassword(email);
      thunkAPI.dispatch(setMessage(data.message));
      return data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue();
    }
  }
);

export const verify2FA = createAsyncThunk(
  "auth/verify2FA",
  async ({ Id, verificationCode }, thunkAPI) => {
    try {
      const data = await authService.verify2FA({ Id, verificationCode });
      thunkAPI.dispatch(setMessage(data.message));
      return data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const resetPassword = createAsyncThunk(
  "auth/resetPassword",
  async ({ id, token, password }, thunkAPI) => {
    try {
      const data = await authService.resetPassword({ id, token, password });
      thunkAPI.dispatch(setMessage(data.message));
      return data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue();
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {
  authService.logout();
});

export const resetState = createAsyncThunk("auth/resetState", async () => {
  return {};
});

export const updatePassword = createAsyncThunk(
  "auth/updatePassword",
  async ({ id, oldPassword, newPassword }, thunkAPI) => {
    try {
      const response = await authService.updatePassword({
        id,
        oldPassword,
        newPassword
      });
      thunkAPI.dispatch(setMessage(response.data.message));
      return { success: true, message: response.data.message };
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkAPI.dispatch(setMessage(message));
      return { success: false, message: message };
    }
  }
);

const initialState = {
  isLoggedIn: false,
  user: null,
  cookieuser: null,
  loading: false,
  data: [],
  error: null,
  status: null,
  valid: false,
  data2fa: null,
  success: false,
  msg: null
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, state => {
        state.isLoggedIn = false;
      })
      .addCase(register.rejected, state => {
        state.isLoggedIn = false;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.isLoggedIn = true;
        state.loading = false;
        state.user = payload.data.userInfo;
        state.error = null; // Clearing any previous errors on successful login
      })
      .addCase(login.pending, state => {
        state.loading = true;
        state.error = null; // Clearing any previous errors on login attempt
      })
      .addCase(login.rejected, (state, { payload }) => {
        state.isLoggedIn = false;
        state.loading = false;
        state.data2fa = null;
        state.user = null;
        state.error = payload; // Setting the error message on login failure
      })
      .addCase(logout.fulfilled, state => {
        state.isLoggedIn = false;
        state.user = null;
        state.error = null; // Clearing any previous errors on logout
      })
      .addCase(fetchUserData.pending, state => {
        state.loading = true;
        state.error = null; // Clearing any previous errors on data fetch
      })
      .addCase(fetchUserData.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.data = payload;
      })
      .addCase(fetchUserData.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload; // Setting the error message on data fetch failure
      })
      .addCase(updatePassword.pending, state => {
        state.loading = true;
        state.error = null; // Clearing any previous errors on update password attempt
      })
      .addCase(updatePassword.fulfilled, state => {
        state.loading = false;
        state.error = null; // Clearing any previous errors on successful update password
      })
      .addCase(updatePassword.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = "Failed to fetch user data";
      })
      .addCase(enable2FA.pending, state => {
        state.isLoading = true;
        state.error = null;
        state.data2fa = null;
      })
      .addCase(enable2FA.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.data2fa = payload.data;
      })
      .addCase(enable2FA.rejected, (state, action) => {
        state.isLoading = false;
        state.data2fa = null;
        state.error = action.error.message;
      })
      .addCase(verify2FA.pending, state => {
        state.isLoading = true;
        state.error = null;
        state.valid = false;
      })
      .addCase(verify2FA.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.valid = action.payload.data.otp_valid;
      })
      .addCase(verify2FA.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.valid = false;
        state.error = payload;
      })
      .addCase(forgotPassword.pending, state => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(forgotPassword.fulfilled, state => {
        state.loading = false;
        state.error = null;
        state.success = true;
      })
      .addCase(forgotPassword.rejected, (state, action) => {
        state.loading = false;
        state.success = null;
        state.error = action.error.message;
      })
      .addCase(resetState.fulfilled, state => {
        return initialState;
      })
      .addCase(resetPassword.pending, state => {
        state.isLoading = true;
        state.error = null;
        state.msg = null;
      })
      .addCase(resetPassword.fulfilled, (state, payload) => {
        state.isLoading = false;
        state.error = null;
        state.msg = payload;
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.isLoading = false;
        state.msg = null;
        state.error = action.error.message;
      });
  }
});

export const { reducer } = authSlice.actions;
export default authSlice.reducer;
