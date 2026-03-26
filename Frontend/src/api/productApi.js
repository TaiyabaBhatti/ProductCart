import axios from "axios";

export const getSingleProduct = async (productId) => {
  return await axios.get(`/api/products/get-product/${productId}`);
};
export const uploadProduct = async (data) => {
  return await axios.post("/api/products/upload-product", data);
};
export const updateProduct = async (productId, data) => {
  return await axios.patch(`/api/products/update-product/${productId}`, data);
};
export const getProducts = async () => {
  return await axios.get("/api/products/get-products", {});
};
