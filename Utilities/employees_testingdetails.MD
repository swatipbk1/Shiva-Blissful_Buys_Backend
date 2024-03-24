Blissful Buys API - Employee Management
Welcome to the Blissful Buys API for managing employees. This section of the API allows you to perform various operations related to employees within the Blissful Buys organization. Below are instructions on how to interact with the API endpoints related to employees.

API Endpoints
Create a New Employee (POST):
Request Method: POST
URL: http://localhost:3000/api/employees
Headers:
Content-Type: application/json
Request Body:
json
Copy code
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
Instructions:
Set the request method to POST.
Use the URL http://localhost:3000/api/employees.
Set the Content-Type header to application/json.
Include the employee details in the request body as shown in the example.
Get All Employees (GET):
Request Method: GET
URL: http://localhost:3000/api/employees
Instructions:
Set the request method to GET.
Use the URL http://localhost:3000/api/employees.
No additional parameters or headers needed.
Get Employee by Employee ID (GET):
Request Method: GET
URL: http://localhost:3000/api/employees/:employee_id
Instructions:
Set the request method to GET.
Use the URL http://localhost:3000/api/employees/:employee_id, replacing :employee_id with the actual employee ID.
No additional parameters or headers needed.
Update an Employee (PUT):
Request Method: PUT
URL: http://localhost:3000/api/employees/:id
Headers:
Content-Type: application/json
Request Body:
json
Copy code
{
    "employee_name": "Amanda White",
    "age": 29,
    "job_title": "Senior Sales Representative",
    "salary": 60000
}
Instructions:
Set the request method to PUT.
Use the URL http://localhost:3000/api/employees/:id, replacing :id with the ID of the employee you want to update.
Set the Content-Type header to application/json.
Include the updated employee details in the request body as shown in the example.
Delete an Employee (DELETE):
Request Method: DELETE
URL: http://localhost:3000/api/employees/:id
Instructions:
Set the request method to DELETE.
Use the URL http://localhost:3000/api/employees/:id, replacing :id with the ID of the employee you want to delete.
No additional parameters or headers needed.
These instructions provide clear guidance on how to perform each type of request on your API endpoints for managing employees. Adjust the URL, request body, and request method as needed for your specific application.






