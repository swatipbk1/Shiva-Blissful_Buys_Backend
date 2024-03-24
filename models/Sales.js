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
    totalPrice: {
        type: Number,
        required: true
    }
});

// Add a pre-save hook to generate a unique sales_id before saving each document
salesSchema.pre('save', function(next) {
    // Generate a unique sales_id using uuidv4 function
    this.sales_id = uuidv4(); // Use uuidv4 to generate a unique ID
    next();
});

// Create a Mongoose model for the sales schema
const Sales = mongoose.model('Sales', salesSchema);

module.exports = Sales;
