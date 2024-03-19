import Cookies from "js-cookie";

export default function authHeader() {
  const userCookie = Cookies.get("user");
  const decodedCookie = decodeURIComponent(userCookie);
  const user = JSON.parse(decodedCookie);
  if (user && user.token) {
    return { Authorization: "Bearer " + user.token, user: user };
  } else {
    return;
  }
}
