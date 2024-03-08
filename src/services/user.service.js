import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8000/";

const getPublicContent = () => {
  return axios.get(API_URL + "all");
};

const getEmployeeBoard = () => {
  return axios.get(API_URL + "user", { headers: authHeader() });
};

const getManagerBoard = () => {
  return axios.get(API_URL + "manager", { headers: authHeader() });
};

const getHRAdminBoard = () => {
  return axios.get(API_URL + "admin", { headers: authHeader() });
};
const getITAdminBoard = async () => {
  return await axios.get(API_URL + "itadmin", {
    headers: authHeader(),
    withCredentials: true
  });
};

const userService = {
  getPublicContent,
  getEmployeeBoard,
  getHRAdminBoard,
  getITAdminBoard,
  getManagerBoard
};

export default userService;
