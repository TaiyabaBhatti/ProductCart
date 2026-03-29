import { User } from "../modles/user.model.js";
import ApiError from "../utils/ApiError.class.js";
import jwt from "jsonwebtoken";

export const verifyJWTToken = async (req, _, next) => {
  try {
    const accessToken = req.cookies.accessToken;
    if (!accessToken) {
      throw new ApiError(401, "Unauthorised Access");
    }

    const decodedInfo = jwt.verify(
      accessToken,
      process.env.ACCESS_TOKEN_SECRET
    );
    const user = await User.findById(decodedInfo?._id).select(
      "-password -refreshToken"
    );
    if (!user) {
      throw new ApiError(401, "Invalid Token");
    }

    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
};
