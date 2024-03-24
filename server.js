const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

// Import routes for employees, sales, products, and aggregated sales
const employeeRoutes = require('./routes/employeesRoutes');
const salesRoutes = require('./routes/salesRoutes');
const productRoutes = require('./routes/productsRoutes');
const aggregatedSalesRoutes = require('./routes/AggregatedSalesRoutes'); // Update the import path

// Initialize Express app
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Log incoming requests
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    console.log('Request body:', req.body);
    next();
});

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB:', err));

// Routes
app.get('/', (req, res) => {
    res.send('Welcome to the API');
});

// Use the routes
app.use('/api/employees', employeeRoutes);
app.use('/api/sales', salesRoutes);
app.use('/api/products', productRoutes);
app.use('/api', aggregatedSalesRoutes); // Use the aggregated sales routes

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Internal Server Error');
});

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
