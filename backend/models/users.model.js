import mongoose from "mongoose";
import { createCollection } from "./connection.js";

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

export default createCollection('users', userSchema)