const mongoose = require('mongoose');

// Define schema for aggregated sales results
const AggregatedSalesSchema = new mongoose.Schema({
  productId: {
    type: String,
    required: true
  },
  productDescription: {
    type: String,
