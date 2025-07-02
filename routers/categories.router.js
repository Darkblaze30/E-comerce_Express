import express from 'express'
import {getAll, getById, insertOne, updateOne, deleteOne} from '../controllers/categories.controller.js'
import { validator } from '../validators/category.validator.js'

const categoriesRouter = express.Router()

categoriesRouter.get('/', getAll)

categoriesRouter.get('/:_id', getById)

categoriesRouter.post('/', validator, insertOne)

categoriesRouter.put('/:_id', updateOne)

categoriesRouter.delete('/:_id', deleteOne)


export default categoriesRouter