import express from 'express'
import { loginUser, logoutUser, refreshAccessToken, registerUser } from '../controllers/user.controller.js';
import { verifyJWTToken } from '../middleware/auth.middleware.js';


const router = express.Router();


router.post("/register",registerUser)
router.post("/login",verifyJWTToken,loginUser)
router.get("/logout",verifyJWTToken,logoutUser)
router.post("/refresh-token",refreshAccessToken)
router.get("/verify-token",verifyJWTToken,(req,res)=>{
res.status(200).json({user:req.user})
})

export default router