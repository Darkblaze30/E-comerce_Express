import express from 'express'
import { getAll, getById, insertOne, updateOne, deleteOne } from '../controllers/payment.controller.js'
import { validator } from '../validators/pyment.validator.js'

const paymentMethodRouter = express.Router()

paymentMethodRouter.get('/', getAll)

paymentMethodRouter.get('/:_id', getById)

paymentMethodRouter.post('/', validator, insertOne)

paymentMethodRouter.put('/:_id', updateOne)

paymentMethodRouter.delete('/:_id', deleteOne)

export default paymentMethodRouter