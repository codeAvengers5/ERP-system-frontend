"use client";
import axios from "axios";
import localStorage from "redux-persist/es/storage";
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
        localStorage.setItem("user", JSON.stringify(response.data));
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
      console.log(response);
      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
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
  enable2FA,
  verify2FA
};

export default authService;
