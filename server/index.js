import dotenv from 'dotenv'
import app from './app.js'
import Razorpay from 'razorpay'

dotenv.config({
    path: './.env'
})


export const Razorpayinstance = new Razorpay({
    key_id: process.env.RAZORPAY_APIKEY,
    key_secret: process.env.RAZORPAY_SECRETKEY,
})




const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
})