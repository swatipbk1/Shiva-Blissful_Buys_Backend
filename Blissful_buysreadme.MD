Blissful Buys Project Backend
Welcome to the Blissful Buys project backend setup. This project serves as the backend infrastructure for managing products, sales data, aggregated sales data, and employee information for the Blissful Buys platform. We have thoroughly tested the routes to retrieve and manipulate data, which will be used to populate and display products on the website, provide business intelligence insights, and manage employee records.

Features
Product Management
Utilize routes to manage product data, including creation, retrieval, updating, and deletion of product information.
Sales Management
Utilize routes to manage sales data, allowing for the creation, retrieval, updating, and deletion of sales records.
Aggregated Sales Data Management
Access functionality to manage aggregated sales data, which can be used for forecasting reports or project frontend integration.
Employee Management
Retrieve and analyze employee data, including recent hires, retirements, department-wise employee counts, reporting manager names, and full-time vs. part-time employees.
API Endpoints
Product Management
Create a New Product: POST /api/products
Get All Products: GET /api/products
Get Product by ID: GET /api/products/:id
Update a Product: PATCH /api/products/:id
Delete a Product: DELETE /api/products/:id
Sales Management
Create a New Sale: POST /api/sales
Get All Sales: GET /api/sales
Get Sale by ID: GET /api/sales/:sales_id
Update a Sale: PATCH /api/sales/:sales_id
Delete a Sale: DELETE /api/sales/:sales_id
Aggregated Sales Data Management
Get All Aggregated Sales Data: GET /api/agg_sales
Create a New Aggregated Sales Entry: POST /api/agg_sales
Get Aggregated Sales Data by ID: GET /api/agg_sales/:id
Update an Aggregated Sales Entry: PATCH /api/agg_sales/:id
Delete an Aggregated Sales Entry: DELETE /api/agg_sales/:id
Employee Management
Get All Employees: GET /api/employees
Get Employee by ID: GET /api/employees/:employee_id
Update an Employee: PATCH /api/employees/:employee_id
Delete an Employee: DELETE /api/employees/:employee_id
Testing Details
Testing details for each API endpoint are defined in the respective utility folders. You can find detailed testing instructions, including datasets and individual API testing instructions, under the following filenames:

employees_testingdetails.md
products_testingdetails.md
sales_testingdetails.md
