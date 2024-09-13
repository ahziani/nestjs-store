import { Schema } from "mongoose";

export const productSchema = new Schema({
    id: String,
    title: String,
    price: Number,
    image: String,
    description: String,
})