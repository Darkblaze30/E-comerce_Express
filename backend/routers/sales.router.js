import express from 'express'
import {getAll, getById, insertOne, updateOne, deleteOne} from '../controllers/sales.controller.js'
import { validator } from '../validators/sales.validator.js'

const salesRouter = express.Router()

salesRouter.get('/', getAll)

salesRouter.get('/:_id', getById)

salesRouter.post('/', validator, insertOne)

salesRouter.put('/:_id', updateOne)

salesRouter.delete('/:_id', deleteOne)

export default salesRouter