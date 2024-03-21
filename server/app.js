import express, { urlencoded } from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './db/index.js'
import paymentRouter from './routes/payment.route.js'

dotenv.config({
    path: './.env'
})

const app = express()
connectDB()

app.use(cors())
app.use(express.json())
app.use(urlencoded({ extended: true }))


app.get('/', (req, res) => {
    res.send("Working fine")
})

app.use('/api/v1', paymentRouter)
app.get('/api/v1/getkey', (req, res) => {
    res.status(200).json({
        key: process.env.RAZORPAY_APIKEY
    })
})


export default app






