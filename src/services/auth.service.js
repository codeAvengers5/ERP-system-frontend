"use client";
import axios from "axios";
import { setTokenCookie } from "@/util/cookie";
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
      if (response.data.userInfo) {
        console.log("login", response.data);
        const token = JSON.stringify(response.data);
        setTokenCookie(token);
      }
      return response.data;
    });
};

const enable2FA = async data => {
  return axios.post(API_URI + `/enable2fa/${data.Id}`).then(response => {
    return response.data;
  });
};

const verify2FA = async ({ Id, verificationCode }) => {
  return axios
    .post(API_URI + `/verify2fa/${Id}`, {
      token: verificationCode
    })
    .then(response => {
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
  return data;
};
const authService = {
  register,
  login,
  logout,
  fetchUserData,
  enable2FA,
  verify2FA,
  forgotPassword,
  resetPassword,
  updatePassword
};

export default authService;
