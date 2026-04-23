import express from "express";
import {
  deleteProduct,
  getProducts,
  getSingleProduct,
  updateProduct,
  uploadProduct,
} from "../controllers/product.controller.js";
import { verifyJWTToken } from "../middleware/auth.middleware.js";
import { verifyOwnership } from "../middleware/owner.middleware.js";

const router = express.Router();

router.post("/upload-product", verifyJWTToken, uploadProduct);
router.delete(
  "/delete-product/:productId",
  verifyJWTToken,
  verifyOwnership,
  deleteProduct
);
router.get("/get-products", getProducts);
router.get(
  "/get-product/:productId",
  verifyJWTToken,
  verifyOwnership,
  getSingleProduct
);
router.patch(
  "/update-product/:productId",
  verifyJWTToken,
  verifyOwnership,
  updateProduct
);

export default router;
