import axios from "axios";

// this file is all about authentication

export const loginUser = async (data) => {
  return await axios.post(`/api/users/login`,data);
};

export const registerUser = async (data) => {
  return await axios.post(`/api/users/register`,data);
};
export const logout = async () => {
  return await axios.get(`/api/users/logout`);
};

export const refreshToken = async () => {
  return await axios.post(`/api/users/refresh-token`);
};

export const verifyToken = async () => {
  return await axios.get(`/api/users/verify-token`);
};
