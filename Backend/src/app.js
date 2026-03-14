import express from 'express'
import dotenv from 'dotenv'
dotenv.config();
import cookieParser from 'cookie-parser'

const app = express()

// configuring incoming request payload -  understanding of it - middlewares

// Large request body attacks
// Memory overload
app.use(express.json({limit:"10kb"}))

// gettign data from url encode over specified limit - also accept nedted key va;ue pairs
app.use(express.urlencoded({limit:"10kb", extended:true}))
app.use(cookieParser())

// routes imported from other files
// app.use(path,imported router)

import userRouter from './routes/user.router.js'
import productRouter from './routes/product.router.js'

app.use("/api/users",userRouter)
app.use("/api/products",productRouter)


// app.use((err, req, res, next) => {
//   res.status(err.statusCode || 500).json({
//     message: err.message
//   });
// });

export default app;


