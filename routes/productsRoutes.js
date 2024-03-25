const express = require('express');
const router = express.Router();
const Product = require('../models/products'); // Import the Product model

// GET all products
router.get('/', async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// GET product by ID
router.get('/:id', async (req, res) => {
    try {
        const productId = req.params.id;
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }
        res.status(200).json(product);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// POST a new product
router.post('/', async (req, res) => {
    try {
        const newProductData = req.body;
        const newProduct = new Product(newProductData);
        const savedProduct = await newProduct.save();
        res.status(201).json(savedProduct);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// PATCH update a product
router.patch('/:id', async (req, res) => {
    try {
        const productId = req.params.id;
        const updatedProductData = req.body;
        const updatedProduct = await Product.findByIdAndUpdate(productId, updatedProductData, {
            new: true,
            runValidators: true
        });
        if (!updatedProduct) {
            return res.status(404).json({ error: 'Product not found' });
        }
        res.status(200).json(updatedProduct);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// DELETE a product
router.delete('/:id', async (req, res) => {
    try {
        const
