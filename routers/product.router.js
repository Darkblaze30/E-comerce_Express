import mongoose from "mongoose";
import { createCollection } from "./main.js";
import express from 'express'
import { validationResult , body } from "express-validator";
import ProductDto from "../Dto/product.dto.js";


const productRouter = express.Router()

const productSchema = new mongoose.Schema({
        code: String,
        name: String,
        description: String,
        image: String,
        price: Number,
        stock: Number,
        condition: String,
        vat: Number,
        categoryId: String
})

const validator = [
  body("code")
    .exists()
    .isString()
    .isLength({ min: 3 })
    .withMessage("no se ingreso un codigo valido"),
  body("name")
    .exists()
    .isString()
    .isLength({ min: 2 })
    .withMessage("no se ingreso un nombre valido"),
  body("description")
    .exists()
    .isString()
    .isLength()
    .withMessage("no se ingreso una descripcion valida"),
  body("image")
    .exists()
    .isURL()
    .withMessage("no se ingreso un Url valido"), 
  body("price")
    .exists()
    .isNumeric()
    .withMessage("no se ingreso un precio valido"), 
  body("stock")
    .exists()
    .isNumeric()
    .withMessage("no se ingreso un numero valido"), 
  body("condition")
    .exists()
    .isString()
    .withMessage("no se ingreso una condicion valida"), 
  body("vat")
    .exists()
    .isString()
    .withMessage("no se ingreso un vat valido"), 
  body("categoryId")
    .exists()
    .isMongoId()
    .withMessage("no se ingreso un id de alguna categoria"), 
];

const Products = createCollection('products', productSchema)


 productRouter.get('/', (req,res) => {
        Products.find({})
        .then(data => res.send(data))
        .catch(err => res.send(err))
    })

     productRouter.get('/:_id', (req,res) => {
        Products.find(req.params)
        .then(data => res.send(data))
        .catch(err => res.send(err))
    })

    productRouter.post('/',validator, (req,res) =>{
        const error = validationResult(req)
        if (!error.isEmpty()){
            res.status(400).send(error)
            return
        }
        Products.insertOne({...(new ProductDto(req.body)), active: true})
        .then(data => res.send(data))
        .catch(err => res.send(err))
    })

    productRouter.put('/:_id', (req,res) => {
        Products.updateOne(req.params,{$set: req.body})
        .then(data => res.send(data))
        .catch(error => res.send(error))
    })

    productRouter.delete('/:_id', (req,res) => {
        Products.deleteOne(req.params)
        .then(data => res.send(data))
        .catch(err => res.send(err))
    })


export default productRouter