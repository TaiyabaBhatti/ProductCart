import mongoose, { mongo, Schema } from "mongoose";
const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique:true,
      lowercase:true
    },
    price: {
        type:String,
        required:true,
    },
    image: {
        type:String,
        required:true,
    },
    // owner:{
    //   type:mongoose.Types.ObjectId,
    //   ref:"User"
    // }
  },
  { timestamps: true }
);


export const Product = mongoose.model("Product",productSchema); 
