const mongoose = require('mongoose');

// Define the schema
const employeeSchema = new mongoose.Schema({
    employee_id: {
        type: String,
        required: true,
        unique: true // Ensure uniqueness for employee_id
    },
    employee_name: String,
    age: Number,
    job_title: String,
    reporting_manager: String,
    employee_type: String,
    employee_status: String,
    
