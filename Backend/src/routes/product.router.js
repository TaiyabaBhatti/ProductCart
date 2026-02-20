import express from 'express'
import { deleteProduct, getProducts, updateProduct, uploadProduct } from '../controllers/product.controller.js';


const router = express.Router();


router.post("/upload-product",uploadProduct)
router.delete("/delete-product/:productId",deleteProduct)
router.get("/all-products",getProducts)
router.patch("/update-product/:productId",updateProduct)

export default router;