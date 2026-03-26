import express from 'express'
import { deleteProduct, getProducts, getSingleProduct, updateProduct, uploadProduct } from '../controllers/product.controller.js';
import { verifyJWTToken } from '../middleware/auth.middleware.js';

const router = express.Router();

router.post("/upload-product",uploadProduct)
router.delete("/delete-product/:productId",deleteProduct)
router.get("/get-products",getProducts)
router.get("/get-product/:productId",getSingleProduct);
router.patch("/update-product/:productId",updateProduct)

export default router;