import express from 'express'
import { validator } from '../validators/user.validator.js';
import { getAll, getById, insertOne, updateOne, deleteOne } from '../controllers/user.controller.js'

const userRouter = express.Router()

userRouter.get('/', getAll)

userRouter.get('/:_id', getById)

userRouter.post('/', validator, insertOne)

userRouter.put('/:_id', updateOne)

userRouter.delete('/:_id', deleteOne)


export default userRouter