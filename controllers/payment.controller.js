import Category_PaymentMetodDto from '../Dto/categories_paymentMethod.dto.js';
import { validationResult } from "express-validator";
import paymentModel from '../models/payment.model.js';

export const getAll = (req, res) => {
    paymentModel.find({active: true})
        .then(data => res.send(data))
        .catch(err => res.send(err))
}
export const getById = (req, res) => {
    paymentModel.find(req.params)
        .then(data => res.send(data))
        .catch(err => res.send(err))
}
export const insertOne = (req, res) => {
    const error = validationResult(req)
    if (!error.isEmpty()) {
        res.status(400).send(error)
        return
    }
    paymentModel.insertOne({ ...(new Category_PaymentMetodDto(req.body)), active: true })
        .then(data => res.send(data))
        .catch(err => res.send(err))
}
export const updateOne = (req, res) => {
    paymentModel.updateOne(req.params, { $set: req.body })
        .then(data => res.send(data))
        .catch(error => res.send(error))
}
export const deleteOne = (req, res) => {
    paymentModel.updateOne(req.params, {$set: {active: false}})
        .then(data => res.send(data))
        .catch(err => res.send(err))
}