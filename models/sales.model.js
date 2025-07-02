import mongoose from "mongoose";
import { createCollection } from "../models/connection.js";

const categorySchema = new mongoose.Schema({
    reference: String,
    date: Date,
    active: Boolean,
    paymentMethod:String,
    client:String,
    seller:String,
    details:String
})

export default createCollection('sales', categorySchema)