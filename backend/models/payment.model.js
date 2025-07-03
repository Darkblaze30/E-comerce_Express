import mongoose from "mongoose";
import { createCollection } from "../models/connection.js";

const paymentMethodSchema = new mongoose.Schema({
    code: String,
    name: String,
    active: Boolean
})

export default createCollection('paymentmethods', paymentMethodSchema)