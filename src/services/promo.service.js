"use client";
import axios from "axios";
import authHeader from "./auth-header";
const API_URI = "http://localhost:8000";

const createPromo = formData => {
  // const config = {
  //     headers: authHeader()
  // };
  return axios.post(API_URI + "/createPromotion", formData, {
    headers: authHeader()
  });
};

const updatePromo = ({ id, formData }) => {
  console.log("on promo service", formData);
  return axios.put(API_URI + `/updatePromotionById/${id}`, formData, {
    headers: authHeader()
  });
};

const deletePromo = Id => {
  return axios.delete(API_URI + `/deletePromotionById/${Id}`, {
    headers: authHeader()
  });
};

const fetchPromo = async () => {
  const response = await fetch(API_URI + "/getAllPromotions", {
    headers: authHeader()
  });
  const data = await response.json();
  return data;
};

export const getPromoById = async id => {
  try {
    const response = await axios.get(API_URI + `/getPromotionById/${id}`, {
      headers: authHeader()
    });
    return response;
  } catch (error) {
    throw error || "Failed to fetch promo post by ID";
  }
};

const promoService = {
  createPromo,
  updatePromo,
  deletePromo,
  fetchPromo
};

export default promoService;
