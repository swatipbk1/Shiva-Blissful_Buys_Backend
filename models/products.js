const mongoose = require('mongoose');

// Define a schema for the product
const productSchema = new mongoose.Schema({
    prod_id: {  // Rename _id to prod_id
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    detailUrl: {
        type: String,
        required: true
    },
    title: {
        shortTitle: {
            type: String,
            required: true
        },
        longTitle: {
            type: String,
            required: true
        }
    },
    price: {
        mrp: {
            type: Number,
            required: true
        },
        cost: {
            type: Number,
            required: true
        },
        discount: {
            type: String,
            required: true
        }
    },
    description: {
        type: String,
        required: true
    },
    d
// Create a Mongoose model for the product schema
const Product = mongoose.model('Product', productSchema);

module.exports = Product; // Export Product instead of Products
