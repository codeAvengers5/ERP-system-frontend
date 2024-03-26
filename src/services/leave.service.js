import axios from "axios";
import authHeader from "./auth-header";
const API_URI = "http://localhost:8000/";
const createLeaveApplication = async payload => {
  console.log("pay", payload);
  const config = {
    headers: authHeader()
  };
  try {
    const response = await axios.post(
      API_URI + "leaveapplications",
      payload,
      config
    );
    // console.log("rsleave",response)
    return response.data;
  } catch (error) {
    throw error.response.data.error || "Failed to create leave application";
  }
};

const updateLeaveRequestById = async payload => {
  try {
    const { id, ...data } = payload;
    const response = await axios.put(
      API_URI + `leaveapplications/${id}`,
      data,
      {
        headers: authHeader()
      }
    );
    return response.data;
  } catch (error) {
    throw error.response.data.error || "Failed to update Leave Request";
  }
};

const deleteLeaveRequest = async reqid => {
  return axios.delete(API_URI + `leaveapplications/${reqid}`, {
    headers: authHeader()
  });
};

const leaveService = {
  createLeaveApplication,
  updateLeaveRequestById,
  deleteLeaveRequest
};

export default leaveService;
