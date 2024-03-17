"use client";
import axios from "axios";
//import localStorage from "redux-persist/es/storage";
import { setAuthToken } from "@/util/storage";
const API_URI = "http://localhost:8000";
const register = formData => {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  };
  return axios.post(API_URI + "/registeradmins", formData, config);
};

const login = async (email, password) => {
  return axios
    .post(API_URI + "/loginadmin", {
      email,
      password
    })
    .then(response => {
      console.log("service", response.data.token);
      if (response.data.token) {
        // console.log("tok",response.data.token)
        // console.log("dd",JSON.stringify(response.data.userInfo))
        setAuthToken(
          response.data.token,
          JSON.stringify(response.data.userInfo)
        );
      }
      return response.data;
    });
};

const forgotPassword = async email => {
  return axios.post(API_URI + "/forgotpassword", email).then(response => {
    return response;
  });
};

const resetPassword = async data => {
  return axios
    .post(API_URI + `/resetpassword/${data.id}/${data.token}`, {
      password: data.password
    })
    .then(response => {
      console.log(response.data);
      return response.data;
    });
};

export const updatePassword = async ({ id, oldPassword, newPassword }) => {
  try {
    const response = await axios.post(API_URI + `/updatepassword/${id}`, {
      oldPassword,
      newPassword
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

const logout = () => {
  removeAuthToken();
};

const fetchUserData = async () => {
  const response = await fetch(API_URI + "/users");
  const data = await response.json();
  console.log(data);
  return data;
};
const authService = {
  register,
  login,
  logout,
  fetchUserData,
  forgotPassword,
  resetPassword,
  updatePassword
};

export default authService;
