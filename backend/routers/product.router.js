import express from 'express'
import {getAll, getById, insertOne, updateOne, deleteOne} from '../controllers/products.controller.js'
import { validator } from '../validators/product.validator.js'

const productRouter = express.Router()

productRouter.get('/', getAll)

productRouter.get('/:_id', getById)

productRouter.post('/', validator, insertOne)

productRouter.put('/:_id', updateOne)

productRouter.delete('/:_id', deleteOne)

export default productRouter