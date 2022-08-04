import express from 'express'

import { index, create } from "../app/controllers/payments.controller.js";

const paymentsRouter = express.Router()

paymentsRouter.get('/payments', index)
paymentsRouter.post('/payment', create)

export default paymentsRouter
