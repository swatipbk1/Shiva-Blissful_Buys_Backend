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
    mobile: String,
    email: String,
    address: String,
    salary: Number,
    department_id: String
});

// Create an index on employee_id field
employeeSchema.index({ employee_id: 1 });

// Create the model
const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;
