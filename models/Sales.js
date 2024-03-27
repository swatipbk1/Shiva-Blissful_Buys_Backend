const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid'); // Import uuidv4 from uuid library

// Define a schema for the sales data
const salesSchema = new mongoose.Schema({
    sales_id: {
        type: String,
        required: true,
        unique: true // Ensure uniqueness for sales_id
    },
    productId: {
        type: String,
        required: true,
        index: true // Adding an index to productId
    },
    productDescription: {
        type: String,
        required: true
    },
    quantitySold: {
        type: Number,
        required: true
    },
    unitPrice: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
