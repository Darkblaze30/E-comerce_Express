import UserDto from "../Dto/user.dto.js";
import { validationResult } from "express-validator";
import userModel from '../models/users.model.js';

export const getAll = (req, res) => {
    userModel.find({active: true})
        .then(data => res.send(data))
        .catch(err => res.send(err))
}
export const getById = (req, res) => {
    userModel.find(req.params)
        .then(data => res.send(data))
        .catch(err => res.send(err))
}
export const insertOne = (req, res) => {
    const error = validationResult(req)
    if (!error.isEmpty()) {
        res.status(400).send(error)
        return
    }
    userModel.insertOne({ ...(new UserDto(req.body)), active: true })
        .then(data => res.send(data))
        .catch(err => res.send(err))
}
export const updateOne = (req, res) => {
    userModel.updateOne(req.params, { $set: req.body })
        .then(data => res.send(data))
        .catch(error => res.send(error))
}
export const deleteOne = (req, res) => {
    userModel.updateOne(req.params, {$set: {active: false}})
        .then(data => res.send(data))
        .catch(err => res.send(err))
}