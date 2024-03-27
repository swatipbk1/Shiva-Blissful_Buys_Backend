const express = require('express');
const router = express.Router();
const Employee = require('./../models/employees'); // Assuming you have an Employee model

// POST Method to add an Employee
router.post('/', async (req, res) =>{
    try{
        const data = req.body;
        const newEmployee = new Employee(data);
        const response = await newEmployee.save();
        console.log('Employee data saved');
        res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
});

// GET method to get all Employees
router.get('/', async (req, res) =>{
    try{
        const data = await Employee.find();
        console.log('Employees data fetched');
        res.status(200).json(data);
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
});

// GET method to get Employee by employee_id
router.get('/:employee_id', async (req, res) =>{
    try{
        const employeeId = req.params.employee_id; // Extract the employee_id from the URL parameter
        const response = await Employee.find({employee_id: employeeId});
        console.log('Employee data fetched by employee_id');
        res.status(200).json(response);
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
});

// PATCH method to update an Employee (partial update)
router.patch('/:employee_id', async (req, res)=>{
    try{
        const employeeId = req.params.employee_id; // Extract the id of Employee from the URL parameter
        const updatedEmployeeData = req.body; // Updated data for the Employee

        const response = await Employee.findOneAndUpdate({employee_id: employeeId}, updatedEmployeeData, {
            new: true, // Return the updated document
            runValidators: true, // Run Mongoose validation
        });

        if (!response) {
            return res.status(404).json({ error: 'Employee not found' });
        }

        console.log('Employee data updated (PATCH)');
        res.status(200).json(response);
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
});












// DELETE method to delete an Employee
router.delete('/:employee_id', async (req, res) => {
    try {
        const { employee_id } = req.params;
       
