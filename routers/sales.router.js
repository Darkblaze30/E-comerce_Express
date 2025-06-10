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
    .exists().withMessage("La referencia es obligatoria")
    .isString().withMessage("La referencia debe ser texto")
    .isLength({ min: 3 }).withMessage("La referencia debe tener al menos 3 caracteres"),

  body("date")
    .exists().withMessage("La fecha es obligatoria")
    .isISO8601().withMessage("La fecha debe tener un formato válido"),

  body("paymentMethod")
    .exists().withMessage("El método de pago es obligatorio")
    .isIn(['CC', 'TI']).withMessage("El método de pago debe ser 'CC' o 'TI'"),

  body("client")
    .exists().withMessage("El cliente es obligatorio")
    .isMongoId().withMessage("El cliente debe ser un ID válido de MongoDB"),

  body("seller")
    .exists().withMessage("El vendedor es obligatorio")
    .isMongoId().withMessage("El vendedor debe ser un ID válido de MongoDB"),

  body("details")
    .exists().withMessage("El campo 'details' es obligatorio")
]

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