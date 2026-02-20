import mongoose, { connect } from 'mongoose'
const dbConnection = async () =>{
try {
    const connection = await mongoose.connect(process.env.MONGODB_URI)
    console.log(`Connection built successfully`)
    
} catch (error) {
    console.log(`Error happend in db connection: ${error.message}`)
}
}

export default dbConnection