import ProductDto from "../Dto/product.dto.js";
import { validationResult } from "express-validator";
import productModel from '../models/products.model.js';

export const getAll = (req, res) => {
    productModel.find({active: true})
        .then(data => res.send(data))
        .catch(err => res.send(err))
}
export const getById = (req, res) => {
    productModel.find(req.params)
        .then(data => res.send(data))
        .catch(err => res.send(err))
}
export const insertOne = (req, res) => {
    const error = validationResult(req)
    if (!error.isEmpty()) {
        res.status(400).send(error)
        return
    }
    productModel.insertOne({ ...(new ProductDto(req.body)), active: true })
        .then(data => res.send(data))
        .catch(err => res.send(err))
}
export const updateOne = (req, res) => {
    productModel.updateOne(req.params, { $set: req.body })
        .then(data => res.send(data))
        .catch(error => res.send(error))
}
export const deleteOne = (req, res) => {
    productModel.updateOne(req.params, {$set: {active: false}})
        .then(data => res.send(data))
        .catch(err => res.send(err))
}