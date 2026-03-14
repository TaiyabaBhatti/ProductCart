import { User } from "../modles/user.model.js";
import ApiError from "../utils/ApiError.class.js";
import ApiResponse from "../utils/ApiResponse.class.js";
import jwt from 'jsonwebtoken'
import { generateAccessAndRefreshTokens } from "../utils/generateAccessRefreshTokens.js";
// user register
export const registerUser = async (req, res, next) => {
  try {
    const { username, email, password, fullname } = req.body;

    if ([username, email, password, fullname].some((field) => !field)) {
      throw new ApiError(400, "All fields are required");
    }

    const existedUser = await User.findOne({ email });
    if (existedUser) {
      throw new ApiError(400, "User already exists.");
    }

    const user = await User.create({
      username: username.toLowerCase(),
      email,
      fullname,
      password,
    });

    const createdUser = await User.findById(user._id).select(
      "-password -refreshToken"
    );
    if (!createdUser) {
      throw new ApiError(400, "User not created");
    }

    res
      .status(200)
      .json(new ApiResponse(200, createdUser, "Successfully registered"));
  } catch (error) {
    next(error);
  }
};
// user login
export const loginUser = async (req, res, next) => {
  try {
    const { identifier, password } = req.body;
    if (!identifier || !password) {
      throw new ApiError(400, "All fields are required");
    }

    const userInDb = await User.findOne({
      $or: [{ email: identifier }, { username: identifier }],
    });
    if (!userInDb) {
      throw new ApiError(404, "User with this email or username is not found");
    }

    const checkPassword = await userInDb.isPasswordCorrect(password);
    if (!checkPassword) {
      throw new ApiError(401, "Password is incorrect");
    }
    const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(
      userInDb._id
    );
    const loggedInUser = await User.findById(userInDb._id).select(
      "-password -refreshToken"
    );
    const options = {
      httpOnly: true,
      secure: true,
    };
    res
      .status(200)
      .cookie("accessToken", accessToken, options)
      .cookie("refreshToken", refreshToken, options)
      .json(new ApiResponse(200, loggedInUser, "User logged In auccessfully"));
  } catch (error) {
    next(error);
  }
};

// logout
export const logoutUser = async (req, res, next) => {
  try {
    await User.findByIdAndUpdate(
      req.user._id,
      {
        $set: { refreshToken: undefined },
      },
      { returnDocument:"after" }
    );
    const options = {
      httpOnlt: true,
      secure: true,
    };

    res
      .status(200)
      .clearCookie("accessToken", options)
      .clearCookie("refreshToken", options)
      .json(new ApiResponse(200, {}, "User logged Out"));
  } catch (error) {
    next(error);
  }
};

// refresh AccessToken
export const refreshAccessToken =async (req,res,next)=>{
  try{
    const incomingRefreshToken = req.cookies.refreshToken;
    if(!incomingRefreshToken){
      throw new ApiError(401,"Unauthorised Access")
    }
   const decodedInfo = jwt.verify(incomingRefreshToken,process.env.REFRESH_TOKEN_SECRET)
   const user = await User.findById(decodedInfo._id); 
   if(!user){
    throw new ApiError(401,"Invalid refresh token")
   }
   
if(user.incomingRefreshToken !== user.refreshToken){
  throw new ApiError(401,"Refresh Token is expired")
}

const {accessToken,newRefreshToken} = await generateAccessAndRefreshTokens(user_id);
const options = {
  httpOnly:true,
  secure:true
}


res.status(200).cookie("accessToken",accessToken,options).cookie("refreshToken",newRefreshToken,options).json(new ApiResponse(200,{accessToken,refreshToken},"Tokens generated"))
   console.log()
  
  }
  catch(error){
    next(error)
  }
}
