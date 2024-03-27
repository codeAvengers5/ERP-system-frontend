export function decodeJwtToken(token) {
  try {
    const decodedToken = decodeURIComponent(token);
    if (decodedToken) {
      console.log("Decoded Token :", decodedToken);
    }
    return decodedToken;
  } catch (error) {
    console.error("Error decoding or verifying JWT token:", error);
    return null;
  }
}
