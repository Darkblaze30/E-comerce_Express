import mongoose from "mongoose";
import { createCollection } from "../models/connection.js";
import express from 'express'
import Category_PaymentMetodDto from '../Dto/categories_paymentMethod.dto.js';
import { validationResult , body } from "express-validator";


const paymentMethodRouter = express.Router()

const paymentMethodSchema = new mongoose.Schema({
    code: String,
    name: String,
    active: Boolean
})

const validator = [
  body("code")
    .exists().withMessage("El código es obligatorio")
    .isString().withMessage("El código debe ser texto")
    .isLength({ min: 3 }).withMessage("El código debe tener al menos 3 caracteres"),

  body("name")
    .exists().withMessage("El nombre es obligatorio")
    .isString().withMessage("El nombre debe ser texto")
    .isLength({ min: 2 }).withMessage("El nombre debe tener al menos 2 caracteres"),
];

const PaymentMethod = createCollection('paymentMethod', paymentMethodSchema)


 paymentMethodRouter.get('/', (req,res) => {
        PaymentMethod.find({})
        .then(data => res.send(data))
        .catch(err => res.send(err))
    })

     paymentMethodRouter.get('/:_id', (req,res) => {
        PaymentMethod.find(req.params)
        .then(data => res.send(data))
        .catch(err => res.send(err))
    })

    paymentMethodRouter.post('/',validator, (req,res) =>{
        const error = validationResult(req)
        if (!error.isEmpty()){
            res.status(400).send(error)
            return
        }
        PaymentMethod.insertOne({...(new Category_PaymentMetodDto(req.body)), active: true})
        .then(data => res.send(data))
        .catch(err => res.send(err))
    })

    paymentMethodRouter.put('/:_id', (req,res) => {
        PaymentMethod.updateOne(req.params,{$set: req.body})
        .then(data => res.send(data))
        .catch(error => res.send(error))
    })

    paymentMethodRouter.delete('/:_id', (req,res) => {
        PaymentMethod.deleteOne(req.params)
        .then(data => res.send(data))
        .catch(err => res.send(err))
    })


export default paymentMethodRouter