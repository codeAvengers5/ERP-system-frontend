"use client";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { setMessage } from "./message";
import promoService from "@/services/promo.service";

export const createPromo = createAsyncThunk(
  "promo/create",
  async (formData, thunkAPI) => {
    try {
      const response = await promoService.createPromo(formData);
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

export const updatePromo = createAsyncThunk(
  "promo/update",
  async (formData, thunkAPI) => {
    try {
      const response = await promoService.updatePromo(formData);
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

export const deletePromo = createAsyncThunk(
  "promo/delete",
  async (formData, thunkAPI) => {
    try {
      const response = await promoService.deletePromo(formData);
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

export const fetchPromoData = createAsyncThunk(
  "auth/fetchPromo",
  async (_, thunkAPI) => {
    try {
      const data = await promoService.fetchPromo();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const initialState = {
  error: null,
  message: null,
  loading: false,
  data: null
};

const promoSlice = createSlice({
  name: "promo",
  initialState,
  reducers: {
    clearStatus: state => {
      state.loading = false;
      state.error = null;
      state.message = null;
    }
  },
  extraReducers: builder => {
    builder
      .addCase(createPromo.fulfilled, (state, { payload }) => {
        state.message = payload.message;
        state.loading = false;
        state.error = null;
      })
      .addCase(createPromo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(createPromo.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updatePromo.fulfilled, (state, { payload }) => {
        state.message = payload.message;
        state.loading = false;
        state.error = null;
      })
      .addCase(updatePromo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(updatePromo.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deletePromo.fulfilled, (state, { payload }) => {
        state.message = payload.message;
        state.loading = false;
        state.error = null;
      })
      .addCase(deletePromo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchPromoData.pending, state => {
        state.loading = true;
        state.error = null; // Clearing any previous errors on data fetch
      })
      .addCase(fetchPromoData.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.data = payload;
      })
      .addCase(fetchPromoData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message; // Setting the error message on data fetch failure
      });
  }
});

export const { clearStatus } = promoSlice.actions;
export default promoSlice.reducer;
