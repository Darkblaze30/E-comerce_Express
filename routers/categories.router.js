import mongoose from "mongoose";
import { createCollection } from "./main.js";
import express from 'express'
import Category_PaymentMetodDto from '../Dto/categories_paymentMethod.dto.js';
import { validationResult , body } from "express-validator";


const categoriesRouter = express.Router()

const categorySchema = new mongoose.Schema({
    code: String,
    name: String,
    active: Boolean
})

const validator = [
  body("code")
    .exists()
    .isString()
    .isLength({ min: 3 })
    .withMessage("no se ingreso un codigo o el codigo ingresado no es valido"),
  body("name")
    .exists()
    .isString()
    .isLength({ min: 2 })
    .withMessage("no se ingreso un nombre o el nombre ingresado no es valido"),
];

const Categories = createCollection('categories', categorySchema)


 categoriesRouter.get('/', (req,res) => {
        Categories.find({})
        .then(data => res.send(data))
        .catch(err => res.send(err))
    })

     categoriesRouter.get('/:_id', (req,res) => {
        Categories.find(req.params)
        .then(data => res.send(data))
        .catch(err => res.send(err))
    })

    categoriesRouter.post('/',validator, (req,res) =>{
        const error = validationResult(req)
        if (!error.isEmpty()){
            res.status(400).send(error)
            return
        }
        Categories.insertOne({...(new Category_PaymentMetodDto(req.body)), active: true})
        .then(data => res.send(data))
        .catch(err => res.send(err))
    })

    categoriesRouter.put('/:_id', (req,res) => {
        Categories.updateOne(req.params,{$set: req.body})
        .then(data => res.send(data))
        .catch(error => res.send(error))
    })

    categoriesRouter.delete('/:_id', (req,res) => {
        Categories.deleteOne(req.params)
        .then(data => res.send(data))
        .catch(err => res.send(err))
    })


export default categoriesRouter