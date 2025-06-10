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
    .exists().withMessage("El código es obligatorio")
    .isString().withMessage("El código debe ser texto")
    .isLength({ min: 3 }).withMessage("El código debe tener al menos 3 caracteres"),

  body("name")
    .exists().withMessage("El nombre es obligatorio")
    .isString().withMessage("El nombre debe ser texto")
    .isLength({ min: 2 }).withMessage("El nombre debe tener al menos 2 caracteres"),

  body("description")
    .exists().withMessage("La descripción es obligatoria")
    .isString().withMessage("La descripción debe ser texto")
    .isLength({ min: 5 }).withMessage("La descripción debe tener al menos 5 caracteres"),

  body("image")
    .exists().withMessage("La URL de la imagen es obligatoria")
    .isURL().withMessage("La imagen debe ser una URL válida"),

  body("price")
    .exists().withMessage("El precio es obligatorio")
    .isFloat({ gt: 0 }).withMessage("El precio debe ser un número mayor que 0"),

  body("stock")
    .exists().withMessage("El stock es obligatorio")
    .isInt({ min: 0 }).withMessage("El stock debe ser un número entero igual o mayor que 0"),

  body("condition")
    .exists().withMessage("La condición es obligatoria")
    .isString().withMessage("La condición debe ser texto")
    .isLength({ min: 3 }).withMessage("La condición debe tener al menos 3 caracteres"),

  body("vat")
    .exists().withMessage("El VAT es obligatorio")
    .isString().withMessage("El VAT debe ser texto")
    .isLength({ min: 1 }).withMessage("El VAT no puede estar vacío"),

  body("categoryId")
    .exists().withMessage("El ID de categoría es obligatorio")
    .isMongoId().withMessage("El ID de categoría debe ser un MongoID válido"),
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