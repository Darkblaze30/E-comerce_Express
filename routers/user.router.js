import mongoose from "mongoose";
import { createCollection } from "./main.js";
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
    .exists()
    .isString()
    .isLength({ min: 3 })
    .withMessage("no se ingreso un nombre"),
  body("lastName")
    .exists()
    .isString()
    .isLength({ min: 3 })
    .withMessage("no se ingreso un apellido"),
  body("identificationNumber")
    .exists()
    .isNumeric()
    .isLength({ min: 3 })
    .withMessage("no se ingreso un numero de identificacion"),
  body("identificationType")
    .exists()
    .isMongoId()
    .isLength({ min: 3 })
    .withMessage("no se ingreso el tipo de identificacion"),
  body("email")
    .exists()
    .isEmail()
    .isLength({ min: 3 })
    .withMessage("no se ingreso un correo"),
  body("phone")
    .exists()
    .isNumeric()
    .isLength({ min: 3 })
    .withMessage("no se ingreso un telefono"),
  body("password")
    .exists()
    .isString()
    .isLength({ min: 3 })
    .withMessage("no se ingreso una clave"),
  body("userType")
    .exists()
    .isString()
    .isLength({ min: 3 })
    .withMessage("no se ingreso un tipo de usuario"),
  body("registeredDate")
    .exists()
    .isDate()
    .withMessage("no se ingreso un registro ")
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