import { getTokenFromCookie } from "./cookie";
import { decodeJwtToken } from "./decodetoken";
import { isTokenExpired } from "./cookie";

export function isAuthenticated() {
  const token = getTokenFromCookie();
  return !!token && !isTokenExpired(token);
}

export function getUserInfo() {
  const token = getTokenFromCookie();
  const decodedToken = decodeJwtToken(token);

  if (decodedToken) {
    const jsonString = decodedToken.split(";")[0];
    const decoded = JSON.parse(jsonString);
    return decoded.userInfo;
  }

  return null;
}
export function isHRAdmin() {
  const userInfo = getUserInfo();
  console.log("mid", userInfo.roleName);
  return userInfo && userInfo.roleName === "hradmin";
}
export function isItAdmin() {
  const userInfo = getUserInfo();
  console.log("mid", userInfo.roleName);
  return userInfo && userInfo.roleName === "itadmin";
}

export function isEmployee() {
  const userInfo = getUserInfo();
  console.log("mid", userInfo.roleName);
  return userInfo && userInfo.roleName === "employee";
}

export function isManager() {
  const userInfo = getUserInfo();
  console.log("mid", userInfo.roleName);
  return userInfo && userInfo.roleName === "manager";
}

export function protectRouteByRole(role, router) {
  return () => {
    if (!isAuthenticated()) {
      console.log("not authenticated");
      router.push("/");
    } else if (!roleCheck(role)) {
      router.push("/");
      console.log("unauthorized");
    }
  };
}

function roleCheck(role) {
  switch (role) {
    case "hradmin":
      return isHRAdmin();
    case "itadmin":
      return isItAdmin();
    case "employee":
      return isEmployee();
    case "manager":
      return isManager();
    default:
      return false;
  }
}
