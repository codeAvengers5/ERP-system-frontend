"use client";
import Cookies from "js-cookie";
import { decodeJwtToken } from "./decodetoken";
export function setTokenCookie(token) {
  const expirationDate = new Date();
  expirationDate.setTime(expirationDate.getTime() + 24 * 60 * 60 * 1000); // 24 hours in milliseconds
  //expirationDate.setTime(expirationDate.getTime() + 5 * 60 * 1000);
  let cookieValue = `${encodeURIComponent(token)}; path=/; HttpOnly`;
  cookieValue += `; expires=${expirationDate.toUTCString()}`;

  Cookies.set("token", cookieValue);
}

export function getTokenFromCookie() {
  const cookies = Cookies.get("token");
  if (cookies) {
    return cookies;
  }
  return "";
}

export function isTokenExpired(cookies) {
  const decodedToken = decodeJwtToken(cookies);
  if (!decodedToken) {
    return true;
  }
  const expirationString = decodedToken.split(",")[5];
  const expiryDate = new Date(expirationString);
  const currentDate = new Date();
  const isExpired = expiryDate.getTime() < currentDate.getTime();
  return isExpired;
}
