import mongoose from "mongoose";
import { createCollection } from "./connection.js";

const categorySchema = new mongoose.Schema({
    code: String,
    name: String,
    active: Boolean
})

export default createCollection('categories', categorySchema)