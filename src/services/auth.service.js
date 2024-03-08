"use client";
import axios from "axios";
import localStorage from "redux-persist/es/storage";

const API_URI = "http://localhost:8000/";

const register = (
  full_name,
  email,
  password,
  position,
  role_name,
  start_date,
  salary,
  gender,
  [...images]
) => {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  };
  return axios.post(
    API_URI + "registeradmins",
    {
      full_name,
      email,
      password,
      position,
      role_name,
      start_date,
      salary,
      gender,
      images
    },
    config
  );
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

const authService = {
  register,
  login,
  logout
};

export default authService;
