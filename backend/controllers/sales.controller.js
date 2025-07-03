import SalesDto from "../Dto/sales.dto.js";
import { validationResult } from "express-validator";
import salesModel from '../models/sales.model.js';

export const getAll = (req, res) => {
    salesModel.find({})
        .then(data => res.send(data))
        .catch(err => res.send(err))
}
export const getById = (req, res) => {
    salesModel.find(req.params)
        .then(data => res.send(data))
        .catch(err => res.send(err))
}
export const insertOne = (req, res) => {
    const error = validationResult(req)
    if (!error.isEmpty()) {
        res.status(400).send(error)
        return
    }
    salesModel.insertOne({ ...(new SalesDto(req.body)), active: true })
        .then(data => res.send(data))
        .catch(err => res.send(err))
}
export const updateOne = (req, res) => {
    salesModel.updateOne(req.params, { $set: req.body })
        .then(data => res.send(data))
        .catch(error => res.send(error))
}
export const deleteOne = (req, res) => {
    salesModel.updateOne(req.params, {$set: {active: false}})
        .then(data => res.send(data))
        .catch(err => res.send(err))
}