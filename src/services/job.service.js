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
