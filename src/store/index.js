import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slices/auth";
import messageReducer from "../slices/message";
import jobPostReducer from "../slices/job"; // Import the jobPostReducer
import leaveReducer from "@/slices/leave";
const reducer = {
  auth: authReducer,
  message: messageReducer,
  jobPost: jobPostReducer,
  leave: leaveReducer // Add jobPostReducer to the reducer object
};

const store = configureStore({
  reducer: reducer,
  devTools: true
});

export default store;
