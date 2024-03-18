import axios from "axios";
const API_URI = "http://localhost:8000/";

export async function job_post(payload) {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  return axios.post(API_URI + "createJobPosts", payload, config);
}

export async function getAllJobPosts() {
  try {
    const response = await axios.get(API_URI + "getJobPosts");
    return response.data;
  } catch (error) {
    throw error.response.data.error || "Failed to fetch job posts";
  }
}

export const getJobPostById = async jobId => {
  try {
    const response = await axios.get(API_URI + `getJobPostsId/${jobId}`);
    return response;
  } catch (error) {
    throw error.response.data.error || "Failed to fetch job post by ID";
  }
};

export const updateJobPostById = async jobData => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  try {
    const { id, ...data } = jobData;
    const response = await axios.put(
      API_URI + `updateJobPosts/${id}`,
      data,
      config
    );
    return response.data;
  } catch (error) {
    throw error.response.data.error || "Failed to update job post";
  }
};

export async function deleteJobPost(jobId) {
  return axios.delete(API_URI + `deleteJobPosts/${jobId}`);
}
