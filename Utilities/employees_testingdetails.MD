SHIVA Enterprises API - Employee Management
Welcome to the SHIVA Enterprises API for managing employees. This section of the API allows you to perform various operations related to employees within the Blissful Buys organization. Below are instructions on how to interact with the API endpoints related to employees.

Add an Employee

Endpoint: POST /api/employees
Add a new employee to the database using the provided employee data set.
Get All Employees

Endpoint: GET /api/employees
Retrieve all employee records from the database.
Get Employee by ID

Endpoint: GET /api/employees/:employee_id
Retrieve employee details by specifying the employee's ID.
Update Employee Data (Partial)

Endpoint: PATCH /api/employees/:employee_id
Update specific fields of an employee record using the provided data set. Only fields provided in the request body will be updated.
Delete Employee

Endpoint: DELETE /api/employees/:employee_id
Delete an employee record from the database by specifying the employee's ID.
Example Requests
Add an Employee:

http
Copy code
POST /api/employees
Content-Type: application/json

{
  "employee_id": "011",
  "employee_name": "Amanda White",
  "age": 28,
  "job_title": "Sales Representative",
  "reporting_manager": "Manager H",
  "employee_type": "Full Time",
  "employee_status": "Permanent",
  "mobile": "444-555-6666",
  "email": "amanda@example.com",
  "address": "789 Maple St, Village",
  "salary": 55000,
  "department_id": "101"
}
Get All Employees:

http
Copy code
GET /api/employees
Get Employee by ID:

http
Copy code
GET /api/employees/011
Update Employee Data (Partial):

http
Copy code
PATCH /api/employees/011
Content-Type: application/json

{
  "employee_name": "Amanda White",
  "age": 29,
  "job_title": "Senior Sales Representative",
  "salary": 60000
}
Delete Employee:

http
Copy code
DELETE /api/employees/011
Base URL
http://localhost:4000/api/employees
Make sure to replace :employee_id with the actual ID of the employee you want to perform operations on.