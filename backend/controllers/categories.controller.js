import Category_PaymentMetodDto from '../Dto/categories_paymentMethod.dto.js';
import { validationResult } from "express-validator";
import categoriesModel from '../models/categories.model.js';

export const getAll = (req, res) => {
    categoriesModel.find({ active: true })
        .then(data => res.send(data))
        .catch(err => res.send(err))
}

export const getById = (req, res) => {
    categoriesModel.find(req.params)
        .then(data => res.send(data))
        .catch(err => res.send(err))
}

export const insertOne =  (req, res) => {
    const error = validationResult(req)
    if (!error.isEmpty()) {
        res.status(400).send(error)
        return
    }
    categoriesModel.insertOne({ ...(new Category_PaymentMetodDto(req.body)), active: true })
        .then(data => res.send(data))
        .catch(err => res.send(err))
}

export const updateOne = (req, res) => {
    categoriesModel.updateOne(req.params, { $set: req.body })
        .then(data => res.send(data))
        .catch(error => res.send(error))
}

export const deleteOne = (req, res) => {
    categoriesModel.updateOne(req.params, { $set: { active: false } })
        .then(data => res.send(data))
        .catch(err => res.send(err))
}