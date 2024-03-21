import { Razorpayinstance } from '../index.js'
import crypto from 'crypto'
import { Payment } from '../models/payment.model.js'

export const checkOut = async (req, res) => {

  try {
    const options = {
      amount: Number(req.body.amount * 100),
      currency: "INR",
    };
    const order = await Razorpayinstance.orders.create(options);
    res.status(201).json({
      success: true,
      order,
      message: "order created successfully"
    })
  } catch (error) {

  }

}

export const paymentVerification = async (req, res) => {

  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
      req.body;

    const body = razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_SECRETKEY)
      .update(body.toString())
      .digest("hex");

    const isAuthentic = expectedSignature === razorpay_signature;

    if (isAuthentic) {
      await Payment.create({
        razorpay_order_id,
        razorpay_payment_id,
        razorpay_signature
      })

      res.redirect(`http://localhost:5173/paymentsuccess?reference=${razorpay_payment_id}`)
    }
    else {
      res.status(404).json({
        success: false,
        message: "Payment failed"
      })
    }
  } catch (error) {

  }

}