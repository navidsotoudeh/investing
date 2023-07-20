import jwtDecode from "jwt-decode";
import Cookies from "js-cookie";
export const decodeToken = (token: string) => {
  try {
    return jwtDecode(token);
  } catch {
    return null;
  }
};

export const verifyToken = (token: any) => {
  return !!token;
};

export const saveTokenToCookie = (token: string) => {
  localStorage.setItem("token", token);
};

export const getTokenFromCookie = () => {
  return Cookies.get("token") || null;
};

export const removeTokenFromCookie = () => {
  localStorage.removeItem("token");
};
