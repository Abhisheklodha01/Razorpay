import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config({
    path: './.env'
})


const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Database connected");
    } catch (error) {
        console.log("database connection failed");
    }
}

export default connectDB