import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  job_post,
  updateJobPostById,
  deleteJobPost
} from "@/services/job.service";

// Create a new job post
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

// Update an existing job post
export const updateExistingJobPost = createAsyncThunk(
  "jobPost/updateExistingJobPost",
  async (jobData, thunkAPI) => {
    try {
      const response = await updateJobPostById(jobData);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// Delete an existing job post
export const deleteExistingJobPost = createAsyncThunk(
  "job/deleteExistingJobPost",
  async (jobId, thunkAPI) => {
    try {
      const response = await deleteJobPost(jobId);
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
    success: false,
    jobPosts: [] // Store job posts fetched from API
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
        state.error = action.payload
          ? action.payload.message
          : "Failed to create job post";
      })
      .addCase(updateExistingJobPost.pending, state => {
        state.loading = true;
      })
      .addCase(updateExistingJobPost.fulfilled, state => {
        state.loading = false;
        state.success = true;
      })
      .addCase(updateExistingJobPost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload
          ? action.payload.message
          : "Failed to update job post";
      })
      .addCase(deleteExistingJobPost.pending, state => {
        state.loading = true;
      })
      .addCase(deleteExistingJobPost.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        // Filter out the deleted job post from the state
        state.jobPosts = state.jobPosts.filter(
          job => job._id !== action.payload
        );
      })
      .addCase(deleteExistingJobPost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload
          ? action.payload.message
          : "Failed to delete job post";
      });
  }
});

export const { clearStatus } = jobPostSlice.actions;

export default jobPostSlice.reducer;
