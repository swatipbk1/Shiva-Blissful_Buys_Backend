SHIVA Enterprises - Sales Management
Welcome to the SHIVA Enterprises for managing sales. This section of the API allows you to perform various operations related to sales within the SHIVA Enterprises platform. Below are instructions on how to interact with the API endpoints related to sales.

API Endpoints
Create a New Sale (POST)
Request Method: POST
URL: http://localhost:4000/api/sales
Headers:
Content-Type: application/json
Request Body:
json
Copy code
{
  "sales_id": "sale7",
  "productId": "product7",
  "productDescription": "gift set Snack Gifts for Women, …",
  "quantitySold": 156,
  "unitPrice": 300,
  "date": "2024-03-18",
  "totalPrice": 590
}
Instructions:
Set the request method to POST.
Use the URL http://localhost:4000/api/sales.
Set the Content-Type header to application/json.
Include the sale details in the request body as shown in the example.
Get All Sales (GET)
Request Method: GET
URL: http://localhost:4000/api/sales
Instructions:
Set the request method to GET.
Use the URL http://localhost:4000/api/sales.
No additional parameters or headers needed.
Get Sale by ID (GET)
Request Method: GET
URL: http://localhost:4000/api/sales/:sales_id
Instructions:
Set the request method to GET.
Use the URL http://localhost:4000/api/sales/:sales_id, replacing :sales_id with the actual sales ID.
No additional parameters or headers needed.
Update a Sale (PATCH)
Updates an existing sale.

Request Method: PATCH
URL: http://localhost:4000/api/sales/:sales_id
Headers:
Content-Type: application/json
Request Body:
json
Copy code
{
  "quantitySold": 200
}
Response:
Status: 200 OK
Body: The updated sale object.
Delete a Sale (DELETE)
Request Method: DELETE
URL: http://localhost:4000/api/sales/:sales_id
Instructions:
Set the request method to DELETE.
Use the URL http://localhost:4000/api/sales/:sales_id, replacing :sales_id with the actual sales ID.
Note
The unique ID for sales is "sale7". Ensure to use this unique ID for creating new sales records.
Install the uuid package to generate unique IDs for new sales records. You can install it using 
npm install uuid