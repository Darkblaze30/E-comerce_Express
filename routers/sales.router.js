import mongoose from "mongoose";
import { createCollection } from "./main.js";
import express from 'express'
import { validationResult , body } from "express-validator";
import SalesDto from "../Dto/sales.dto.js";


const salesRouter = express.Router()

const categorySchema = new mongoose.Schema({
    reference: String,
    date: Date,
    active: Boolean,
    paymentMethod:String,
    client:String,
    seller:String,
    details:String
})

const validator = [
  body("reference")
    .exists()
    .isString()
    .isLength({ min: 3 })
    .withMessage("no se ingreso una referencia valida"),
  body("date")
    .exists()
    .isDate()
    .withMessage("no se ingreso una fecha valida"),
  body("paymentMethod")
    .exists()
    .isMongoId()
    .withMessage("no se ingreso un metodo de pago"),
  body("client")
    .exists()
    .isString()
    .isLength({ min: 3 })
    .withMessage("no se ingreso un cliente"),
  body("seller")
    .exists()
    .isNumeric()
    .isLength({ min: 3 })
    .withMessage("no se ingreso un vendedor"),
  body("details")
    .exists()
    .isString()
    .isLength({ min: 3 })
    .withMessage("no se ingreso un metodo de pago")
];

const sales = createCollection('sales', categorySchema)


 salesRouter.get('/', (req,res) => {
        sales.find({})
        .then(data => res.send(data))
        .catch(err => res.send(err))
    })

     salesRouter.get('/:_id', (req,res) => {
        sales.find(req.params)
        .then(data => res.send(data))
        .catch(err => res.send(err))
    })

    salesRouter.post('/',validator, (req,res) =>{
        const error = validationResult(req)
        if (!error.isEmpty()){
            res.status(400).send(error)
            return
        }
        sales.insertOne({...(new SaleDto(req.body)), active: true})
        .then(data => res.send(data))
        .catch(err => res.send(err))
    })

    salesRouter.put('/:_id', (req,res) => {
        sales.updateOne(req.params,{$set: req.body})
        .then(data => res.send(data))
        .catch(error => res.send(error))
    })

    salesRouter.delete('/:_id', (req,res) => {
        sales.deleteOne(req.params)
        .then(data => res.send(data))
        .catch(err => res.send(err))
    })


export default salesRouter