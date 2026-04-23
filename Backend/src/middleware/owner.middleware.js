import { Product } from "../modles/product.model.js";
import { User } from "../modles/user.model.js";
import ApiError from "../utils/ApiError.class.js";


export const verifyOwnership  = async (req,_, next)=>{
    try {
        const { productId } = req.params;
        const product = await Product.findById(productId);
         if (product.owner.toString() !== req.user._id.toString()) {
            console.log("You are not allowed to delete this product")
      throw new ApiError(403, "You are not allowed to delete/update this product");
    }
        next();
    } catch (error) {
         next(error);
  
    }

}