const express = require('express');
const router = express.Router();
const Agg_Sales = require('./../models/AggregatedSalesSchema'); // Assuming you have a model for aggregated sales

// GET method to fetch aggregated sales data
router.get('/agg_sales', async (req, res) => {
    try {
        const aggSalesData = await Agg_Sales.find();
        res.status(200).json(aggSalesData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// POST method to create aggregated sales data
router.post('/agg_sales', async (req, res) => {
    try {
        const data = req.body;
        const newAggSales = new Agg_Sales(data);
        const response = await newAggSales.save();
        console.log('Aggregated sales data saved');
        res.status(200).json(response);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// PATCH method to update aggregated sales data
router.patch('/agg_sales/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const updatedAggSales = await Agg_Sales.findByIdAndUpdate(id, updatedData, { new: true });
        if (!updatedAggSales) {
            return res.status(404).json({ error: 'Aggregated sales data not found' });
        }
        console.log('Aggregated sales data updated');
        res.status(200).json(updatedAggSales);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// DELETE method to delete aggregated sales data
router.delete('/agg_sales/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const deletedAggSales = await Agg_Sales.findByIdAndDelete(id);
        if (!deletedAggSales) {
            return res.status(404).json({ error: 'Aggregated sales data not found' });
        }
        console.log('Aggregated sales data deleted');
        res.status(200).json({ message: 'Aggregated sales data deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
