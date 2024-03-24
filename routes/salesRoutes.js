const express = require('express');
const router = express.Router();
const Sales = require('../models/Sales');

router.post('/', async (req, res) => {
    try {
        const data = req.body;
        console.log('Request body:', data); // Log the request body
        const newSalesRecord = new Sales(data);
        const savedRecord = await newSalesRecord.save();
        res.status(201).json(savedRecord);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});



// Get all sales records
router.get('/', async (req, res) => {
    try {
        const salesRecords = await Sales.find();
        res.status(200).json(salesRecords);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Get a specific sales record by sales_id
router.get('/:sales_id', async (req, res) => {
    try {
        const { sales_id } = req.params;
        const salesRecord = await Sales.findOne({ sales_id });
        if (!salesRecord) {
            return res.status(404).json({ error: 'Sales Record not found' });
        }
        res.status(200).json(salesRecord);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Update a sales record by sales_id
router.patch('/:sales_id', async (req, res) => {
    try {
        const { sales_id } = req.params;
        const updatedData = req.body;
        const updatedRecord = await Sales.findOneAndUpdate({ sales_id }, updatedData, { new: true });
        if (!updatedRecord) {
            return res.status(404).json({ error: 'Sales Record not found' });
        }
        res.status(200).json(updatedRecord);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Delete a sales record by sales_id
router.delete('/:sales_id', async (req, res) => {
    try {
        const { sales_id } = req.params;
        const deletedRecord = await Sales.findOneAndDelete({ sales_id });
     