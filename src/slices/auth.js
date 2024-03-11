"use client";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { setMessage } from "./message";

import AuthService from "../services/auth.service";

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
      console.log(data);
      return { data };
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

const initialState = { isLoggedIn: false, user: null, loading: false };

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
      })
      .addCase(login.pending, state => {
        state.loading = true;
      })
      .addCase(login.rejected, state => {
        state.isLoggedIn = false;
        state.loading = false;
        state.user = null;
      })
      .addCase(logout.fulfilled, state => {
        state.isLoggedIn = false;
        state.user = null;
      });
  }
});

export const { reducer } = authSlice.actions;
export default authSlice.reducer;
