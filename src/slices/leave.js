// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import leaveService from "@/services/leave.service";
// import { setMessage } from "./message";

// export const createLeave = createAsyncThunk(
//   "leave/createLeave",
//   async (payload, thunkAPI) => {
//     try {
//       const data = await leaveService.createLeaveApplication(payload);
//       thunkAPI.dispatch(setMessage(data.message));
//       return data;
//     } catch (error) {
//       const message =
//         error.message || "Failed to create leave application";
//       thunkAPI.dispatch(setMessage(message));
//       return thunkAPI.rejectWithValue();
//     }
//   }
// );

// const initialState = {
//   loading: false,
//   error: null,
//   success: false, // Add success property to the initial state
// };

// const leaveSlice = createSlice({
//   name: "leave",
//   initialState,
//   reducers: {
//     clearSuccess: (state) => {
//       state.success = false;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(createLeave.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(createLeave.fulfilled, (state) => {
//         state.loading = false;
//         state.error = null;
//         state.success = true; // Set success to true on successful leave creation
//       })
//       .addCase(createLeave.rejected, (state, { payload }) => {
//         state.success = false;
//         state.loading = false;
//         state.error = payload || "Failed to create leave application";
//       });
//   },
// });

// export const { reducer, actions } = leaveSlice; // Export actions for use in components
// export default leaveSlice.reducer;
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import leaveService from "@/services/leave.service";
import { setMessage } from "./message";

// Create Leave Thunk
export const createLeave = createAsyncThunk(
  "leave/createLeave",
  async (payload, thunkAPI) => {
    try {
      const data = await leaveService.createLeaveApplication(payload);
      thunkAPI.dispatch(setMessage(data.message));
      return data;
    } catch (error) {
      const message = error.message || "Failed to create leave application";
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue();
    }
  }
);

// Update Leave Thunk
export const updateLeave = createAsyncThunk(
  "leave/updateLeave",
  async (payload, thunkAPI) => {
    try {
      const data = await leaveService.updateLeaveRequestById(payload);
      thunkAPI.dispatch(setMessage(data.message));
      return data;
    } catch (error) {
      const message = error.message || "Failed to update leave request";
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue();
    }
  }
);

// Delete Leave Thunk
export const deleteLeave = createAsyncThunk(
  "leave/deleteLeave",
  async (reqid, thunkAPI) => {
    try {
      await leaveService.deleteLeaveRequest(reqid);
      const message = "Leave request deleted successfully";
      thunkAPI.dispatch(setMessage(message));
      return reqid;
    } catch (error) {
      const message = error.message || "Failed to delete leave request";
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue();
    }
  }
);

const initialState = {
  loading: false,
  error: null,
  success: false // Add success property to the initial state
};

const leaveSlice = createSlice({
  name: "leave",
  initialState,
  reducers: {
    clearSuccess: state => {
      state.success = false;
    }
  },
  extraReducers: builder => {
    builder
      // Create Leave Reducers
      .addCase(createLeave.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createLeave.fulfilled, state => {
        state.loading = false;
        state.error = null;
        state.success = true; // Set success to true on successful leave creation
      })
      .addCase(createLeave.rejected, (state, { payload }) => {
        state.success = false;
        state.loading = false;
        state.error = payload || "Failed to create leave application";
      })
      // Update Leave Reducers
      .addCase(updateLeave.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateLeave.fulfilled, state => {
        state.loading = false;
        state.error = null;
        state.success = true; // Set success to true on successful leave update
      })
      .addCase(updateLeave.rejected, (state, { payload }) => {
        state.success = false;
        state.loading = false;
        state.error = payload || "Failed to update leave request";
      })
      // Delete Leave Reducers
      .addCase(deleteLeave.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteLeave.fulfilled, state => {
        state.loading = false;
        state.error = null;
        state.success = true; // Set success to true on successful leave deletion
      })
      .addCase(deleteLeave.rejected, (state, { payload }) => {
        state.success = false;
        state.loading = false;
        state.error = payload || "Failed to delete leave request";
      });
  }
});

export const { reducer, actions } = leaveSlice; // Export actions for use in components
export default leaveSlice.reducer;
