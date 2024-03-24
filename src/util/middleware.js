import { getTokenFromCookie } from "./cookie";
import { decodeJwtToken } from "./decodetoken";
import { isTokenExpired } from "./cookie";
export function isAuthenticated() {
  const token = getTokenFromCookie();
  console.log("midtoken", token);
  return !!token;
}

export function getUserInfo() {
  const token = getTokenFromCookie();
  const decodedToken = decodeJwtToken(token);

  if (decodedToken) {
    const jsonString = decodedToken.split(";")[0];
    const exp = decodedToken.split(",")[5];
    const decoded = JSON.parse(jsonString);
    console.log("miduser", decoded.userInfo);
    console.log("this exp", exp);
    return decoded.userInfo;
  }

  return null;
}

// Function to check if the user has the role of HR Admin
export function isHRAdmin() {
  const userInfo = getUserInfo();
  console.log("mid", userInfo.roleName);
  return userInfo && userInfo.roleName === "hr";
}

// Function to check if the user has the role of IT Admin
export function isItAdmin() {
  const userInfo = getUserInfo();
  console.log("mid", userInfo.roleName);
  return userInfo && userInfo.roleName === "itadmin";
}

// Function to check if the user has the role of Employee
export function isEmployee() {
  const userInfo = getUserInfo();
  console.log("mid", userInfo.roleName);
  return userInfo && userInfo.roleName === "employee";
}

// Function to check if the user has the role of Manager
export function isManager() {
  const userInfo = getUserInfo();
  console.log("mid", userInfo.roleName);
  return userInfo && userInfo.roleName === "manager";
}

// Middleware function to protect routes based on user roles
export function protectRouteByRole(role, router) {
  return () => {
    if (!isAuthenticated() || isTokenExpired(getTokenFromCookie())) {
      console.log("not authenticated");
      router.push("/");
    } else if (!roleCheck(role)) {
      router.push("/"); // Redirect to unauthorized page or login page
      console.log("unauthorized");
    }
  };
}

// Function to check if the user has the required role
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
