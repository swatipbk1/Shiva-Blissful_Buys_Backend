const mongoose = require('mongoose');

// Define schema for aggregated sales results
const AggregatedSalesSchema = new mongoose.Schema({
  productId: {
    type: String,
    required: true
  },
  productDescription: {
    type: String,
    required: true
  },
  totalQuantitySold: {
    type: Number,
    required: true
  },
  totalRevenue: {
    type: Number,
    required: true
  }
});

// Create Mongoose model for aggregated sales results
const Agg_Sales = mongoose.model('Agg_Sales', AggregatedSalesSchema);

module.exports = Agg_Sales;
