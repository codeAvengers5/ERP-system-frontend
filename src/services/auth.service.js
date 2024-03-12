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
      if (response.data.userInfo.token) {
        localStorage.setItem("user", JSON.stringify(response.data.userInfo));
      }

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
  fetchUserData
};

export default authService;
