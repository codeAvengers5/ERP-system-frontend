import axios from "axios";
import authHeader from "./auth-header";
const API_URI = "http://localhost:8000/";

export async function job_post(payload) {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  return axios.post(API_URI + "createJobPosts", payload, {
    headers: authHeader()
  });
}

export async function getAllJobPosts() {
  try {
    const response = await axios.get(API_URI + "getJobPosts", {
      headers: authHeader()
    });
    return response.data;
  } catch (error) {
    throw error || "Failed to fetch job posts";
  }
}

export const getJobPostById = async id => {
  try {
    const response = await axios.get(API_URI + `getJobPostsId/${id}`, {
      headers: authHeader()
    });
    return response;
  } catch (error) {
    throw error.response.data.error || "Failed to fetch job post by ID";
  }
};

export const updateJobPostById = async jobData => {
  try {
    const { id, ...data } = jobData;
    const response = await axios.put(API_URI + `updateJobPosts/${id}`, data, {
      headers: authHeader()
    });
    return response.data;
  } catch (error) {
    throw error.response.data.error || "Failed to update job post";
  }
};

export async function deleteJobPost(jobId) {
  return axios.delete(API_URI + `deleteJobPosts/${jobId}`, {
    headers: authHeader()
  });
}
