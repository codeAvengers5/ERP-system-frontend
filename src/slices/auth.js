/* eslint-disable no-unused-vars */
"use client";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { setMessage } from "./message";
import authService from "../services/auth.service";

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
      return thunkAPI.rejectWithValue();
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }, thunkAPI) => {
    try {
      const data = await authService.login(email, password);
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

export const fetchUserData = createAsyncThunk(
  "auth/fetchUser",
  async (_, thunkAPI) => {
    try {
      const data = await authService.fetchUserData();
      return data;
    } catch (error) {
      console.log(error);
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

export const verify2FA = createAsyncThunk(
  "auth/verify2FA",
  async ({ Id, verificationCode }, thunkAPI) => {
    console.log("id", Id);
    try {
      const data = await authService.verify2FA({ Id, verificationCode });
      thunkAPI.dispatch(setMessage(data.message));
      console.log("service response", data);
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

const initialState = {
  isLoggedIn: false,
  user: null,
  loading: false,
  data: [],
  error: null,
  status: null,
  valid: false,
  data2fa: null
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
        state.user = payload;
      })
      .addCase(login.pending, state => {
        state.loading = true;
      })
      .addCase(login.rejected, state => {
        state.isLoggedIn = false;
        state.loading = false;
        state.data2fa = null;
        state.user = null;
      })
      .addCase(logout.fulfilled, state => {
        state.isLoggedIn = false;
        state.user = null;
      })
      .addCase(fetchUserData.pending, state => {
        state.loading = true;
      })
      .addCase(fetchUserData.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.data = payload;
      })
      .addCase(fetchUserData.rejected, state => {
        state.loading = false;
        state.error = "Failed to fetch user data";
      })
      .addCase(resetState.fulfilled, state => {
        return initialState;
      })
      .addCase(enable2FA.pending, state => {
        state.isLoading = true;
        state.error = null;
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
      .addCase(verify2FA.fulfilled, (state, payload) => {
        state.isLoading = false;
        state.error = null;
        state.valid = payload.otp_valid;
      })
      .addCase(verify2FA.rejected, (state, action) => {
        state.isLoading = false;
        state.valid = false;
        state.error = action.error.message;
      });
  }
});

export const { reducer } = authSlice.actions;
export default authSlice.reducer;
