import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slices/auth";
import messageReducer from "../slices/message";
import jobPostReducer from "../slices/job"; // Import the jobPostReducer

const reducer = {
  auth: authReducer,
  message: messageReducer,
  jobPost: jobPostReducer // Add jobPostReducer to the reducer object
};

const store = configureStore({
  reducer: reducer,
  devTools: true
});

export default store;
