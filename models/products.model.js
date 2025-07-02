import mongoose from "mongoose";
import { createCollection } from "../models/connection.js";

const productSchema = new mongoose.Schema({
        code: String,
        name: String,
        description: String,
        image: String,
        price: Number,
        stock: Number,
        condition: String,
        vat: String,
        categoryId: String
})

export default createCollection('products', productSchema)