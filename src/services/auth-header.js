import { decodeJwtToken } from "@/util/decodetoken";
import { getTokenFromCookie } from "@/util/cookie";
export default function authHeader() {
  const token = getTokenFromCookie();
  if (token) {
    const decodedToken = decodeJwtToken(token);
    const jsonString = decodedToken.split(";")[0];
    const decoded = JSON.parse(jsonString);
    console.log("auth", decoded.token);
    const realtoken = decoded.token;
    if (!realtoken) {
      console.log("notoken");
      return {};
    }
    return {
      Authorization: `Bearer ${decoded.token}`,
      user: decoded,
      "Content-Type": "multipart/form-data"
    };
  } else {
    return {};
  }
}
