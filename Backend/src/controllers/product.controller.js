import mongoose from "mongoose";
import ApiError from "../utils/ApiError.class.js";
import ApiResponse from "../utils/ApiResponse.class.js";
import { Product } from "../modles/product.model.js";

export const uploadProduct = async (req, res, next) => {
  try {
    const { name, price, image } = req.body;
    if ([name, price, image].some((field) => !field)) {
      throw new ApiError(400, "All fields are required");
    }

    // already existed product

    const existedProduct = await Product.findOne({ name });
    if (existedProduct) {
      throw new ApiError(400, "Product with that name already exist.");
    }

    // creatin product - save it - also returned saved data
    const productInDatabase = await Product.create({
      name,
      price,
      image,
      // owner:req.user._id
    });

    // consoling for getting know
    console.log(`created Product in database: ${productInDatabase}`);
    return res
      .status(201)
      .json(
        new ApiResponse(201, productInDatabase, "Product created Successfully")
      );
  } catch (error) {
    next(error);
  }
}

export const deleteProduct = async (req,res,next) => {
    try {
      const {productId} = req.params;
     await Product.findByIdAndDelete(productId);
     
    return res
      .status(200)
      .json(new ApiResponse(200, {}, "Product has been deleted"));
        
    } catch (error) {
        next(error)
    }
}

export const getProducts = async (req,res,next) =>{
    try {
        const products = await Product.find({});
        return res.status(200).json(new ApiResponse(200,products,"Fetched all products"))
    } catch (error) {
        next(error)
    }
}

export const getSingleProduct = async (req,res,next) =>{
  try {
const {productId} = req.params;
  const product = await Product.findById(productId);
        return res.status(200).json(new ApiResponse(200,product,"Fetched product"))
    
    
  } catch (error) {
    next(error)
  }
}

export const updateProduct = async (req,res,next) => {
    try {
        const {productId} = req.params;
        const {name} = req.body;
        const product = await Product.findByIdAndUpdate(productId,{name},{returnDocument:'after'});
        console.log(product)
        return res.status(200).json(new ApiResponse(200,{},"Updated price"))
    
    } catch (error) {
        next(error)
    }
}
