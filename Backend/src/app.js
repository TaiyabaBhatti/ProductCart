import express from 'express'
import dotenv from 'dotenv'
dotenv.config();

const app = express()

// configuring incoming request payload -  understanding of it - middlewares

// Large request body attacks
// Memory overload
app.use(express.json({limit:"10kb"}))

// gettign data from url encode over specified limit - also accept nedted key va;ue pairs
app.use(express.urlencoded({limit:"10kb", extended:true}))

// routes imported from other files
// app.use(path,imported router)

import userRouter from './routes/user.router.js'
app.use("/api/users",userRouter)


export default app;


