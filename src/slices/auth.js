"use client";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setMessage } from "./message";


import authService from "../services/auth.service";

// let user = null;

// try {
//   const userString = localStorage.getItem("user");
//   if (userString) {
//     user = JSON.parse(userString);
//   }
// } catch (error) {
//   console.error("Error parsing user data:", error);
// }
let user = null;
if (typeof localStorage !== "undefined") {

const userString = localStorage.getItem("user");
user = userString ? JSON.parse(userString) : null;
} else {
  console.error("localStorage is not available in this environment.");
}

export const register = createAsyncThunk(
  "auth/register",
  async (
    {
      full_name,
      email,
      password,
      position,
      role_name,
      start_date,
      salary,
      gender,
      images
    },
    thunkAPI
  ) => {
    try {
      const response = await authService.register(
        full_name,
        email,
        password,
        position,
        role_name,
        start_date,
        salary,
        gender,
        images
      );
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
      return { user: data };
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
  await authService.logout();
});

const initialState = user
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user: null };

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.isLoggedIn = false;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoggedIn = false;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.user = action.payload.user;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoggedIn = false;
        state.user = null;
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.isLoggedIn = false;
        state.user = null;
      });
  },
});

export const { reducer} = authSlice.actions;
export default authSlice.reducer;

