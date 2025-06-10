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
    .exists().withMessage("El código es obligatorio")
    .isString().withMessage("El código debe ser texto")
    .isLength({ min: 3 }).withMessage("El código debe tener al menos 3 caracteres"),

  body("name")
    .exists().withMessage("El nombre es obligatorio")
    .isString().withMessage("El nombre debe ser texto")
    .isLength({ min: 2 }).withMessage("El nombre debe tener al menos 2 caracteres"),
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