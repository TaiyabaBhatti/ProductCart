import { User } from "../modles/user.model.js";
import ApiError from "./ApiError.class.js";

export const generateAccessAndRefreshTokens = async (userId) => {
  try {
    const user = await User.findById(userId);
    const accessToken = await user.generateAccessToken();
    const refreshToken = await user.generateRefreshToken();
    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });
  
    // console.log(`Access token: ${accessToken}, Refresh Token: ${refreshToken}`)
 
return {accessToken, refreshToken}
} catch (error) {
    throw new ApiError(500, `Server issue: ${error}`);
  }
};
