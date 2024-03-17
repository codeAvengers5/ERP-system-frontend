import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { job_post } from "@/services/job.service";

export const createJobPost = createAsyncThunk(
  "jobPost/createJobPost",
  async (jobData, thunkAPI) => {
    try {
      const response = await job_post(jobData);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const jobPostSlice = createSlice({
  name: "jobPost",
  initialState: {
    loading: false,
    error: null,
    success: false
  },
  reducers: {
    clearStatus: state => {
      state.loading = false;
      state.error = null;
      state.success = false;
    }
  },
  extraReducers: builder => {
    builder
      .addCase(createJobPost.pending, state => {
        state.loading = true;
      })
      .addCase(createJobPost.fulfilled, state => {
        state.loading = false;
        state.success = true;
      })
      .addCase(createJobPost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message || "Failed to create job post";
      });
  }
});

export const { clearStatus } = jobPostSlice.actions;

export default jobPostSlice.reducer;
