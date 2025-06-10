import mongoose from "mongoose";
import { createCollection } from "./connection.js";
import express from 'express'
import { validationResult , body } from "express-validator";
import userDto from "../Dto/user.dto.js";


const userRouter = express.Router()

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    identificationNumber: Number,
    identificationType: String,
    email: String,
    phone: Number,
    password: String,
    userType: String,
    registeredDate:Date,
    place:Object
})
const validator = [
  body("firstName")
    .exists().withMessage("El nombre es obligatorio")
    .isString().withMessage("El nombre debe ser texto")
    .isLength({ min: 3 }).withMessage("El nombre debe tener al menos 3 caracteres"),

  body("lastName")
    .exists().withMessage("El apellido es obligatorio")
    .isString().withMessage("El apellido debe ser texto")
    .isLength({ min: 3 }).withMessage("El apellido debe tener al menos 3 caracteres"),

  body("identificationNumber")
    .exists().withMessage("El número de identificación es obligatorio")
    .isString().withMessage("El número de identificación debe ser texto")
    .isLength({ min: 3 }).withMessage("El número de identificación debe tener al menos 3 caracteres"),

  body("identificationType")
    .exists().withMessage("El tipo de identificación es obligatorio")
    .isIn(['CC','TI']).withMessage("El tipo de identificación debe ser CC o TI"),

  body("email")
    .exists().withMessage("El correo es obligatorio")
    .isEmail().withMessage("El correo debe tener un formato válido"),

  body("phone")
    .exists().withMessage("El teléfono es obligatorio")
    .isString().withMessage("El teléfono debe ser texto")
    .isLength({ min: 3 }).withMessage("El teléfono debe tener al menos 3 caracteres"),

  body("password")
    .exists().withMessage("La clave es obligatoria")
    .isString().withMessage("La clave debe ser texto")
    .isLength({ min: 3 }).withMessage("La clave debe tener al menos 3 caracteres"),

  body("userType")
    .exists().withMessage("El tipo de usuario es obligatorio")
    .isString().withMessage("El tipo de usuario debe ser texto")
    .isIn(['C', 'S']).withMessage("El tipo de usuario debe ser C o S"),

    //Formato Iso YYYY-MM-DD
  body("registeredDate")
    .exists().withMessage("La fecha de registro es obligatoria")
    .isISO8601().withMessage("La fecha de registro debe ser una fecha válida"),
];


const users = createCollection('users', userSchema)


 userRouter.get('/', (req,res) => {
        users.find({})
        .then(data => res.send(data))
        .catch(err => res.send(err))
    })

     userRouter.get('/:_id', (req,res) => {
        users.find(req.params)
        .then(data => res.send(data))
        .catch(err => res.send(err))
    })

    userRouter.post('/',validator, (req,res) =>{
        const error = validationResult(req)
        if (!error.isEmpty()){
            res.status(400).send(error)
            return
        }
        users.insertOne({...(new userDto(req.body)), active: true})
        .then(data => res.send(data))
        .catch(err => res.send(err))
    })

    userRouter.put('/:_id', (req,res) => {
        users.updateOne(req.params,{$set: req.body})
        .then(data => res.send(data))
        .catch(error => res.send(error))
    })

    userRouter.delete('/:_id', (req,res) => {
        users.deleteOne(req.params)
        .then(data => res.send(data))
        .catch(err => res.send(err))
    })


export default userRouter