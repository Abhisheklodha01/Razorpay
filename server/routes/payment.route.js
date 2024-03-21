import express from 'express'
import { checkOut, paymentVerification } from '../controllers/Payment.controller.js'

const router = express.Router()

router.route('/checkout').post(checkOut)
router.route('/paymentverification').post(paymentVerification)


export default router