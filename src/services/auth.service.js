import axios from "../../node_modules/axios/index";

const API_URI = "http://localhost:8000/mekedonia";

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
  return axios.post(API_URI + "/registeradmins", {
    full_name,
    email,
    password,
    position,
    role_name,
    start_date,
    salary,
    gender,
    images
  });
};

const login = async(email, password) => {
  return axios
    .post(API_URI + "/loginadmin", {
      email,
      password
    })
    .then(response => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
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
