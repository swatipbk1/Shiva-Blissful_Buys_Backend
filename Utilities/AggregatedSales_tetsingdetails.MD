Blissful Buys API - Aggregated Sales Data
Welcome to the Blissful Buys API for managing aggregated sales data. This section of the API allows you to perform various operations related to aggregated sales data. Below are instructions on how to interact with the API endpoints for aggregated sales data.

API Endpoints
GET Aggregated Sales Data
URL: http://localhost:4000/api/agg_sales
Endpoint: /api/agg_sales
Description: Retrieves all aggregated sales data.
Method: GET
Response: Returns an array of aggregated sales data objects.
Example:
json
Copy code
[
  {
    "productId": "product1",
    "productDescription": "Organic Vegetables Basket",
    "totalQuantitySold": 30,
    "totalRevenue": 24000
  },
  {
    "productId": "product2",
    "productDescription": "Instant Pot Duo 7-in-1 Electric Pressure Cooker",
    "totalQuantitySold": 25,
    "totalRevenue": 3750
  },
  ...
]
POST Aggregated Sales Data
Endpoint: /api/agg_sales
Use the URL http://localhost:4000/api/agg_sales
Description: Creates a new aggregated sales data entry.
Method: POST
Request Body: JSON object containing aggregated sales data fields (productId, productDescription, totalQuantitySold, totalRevenue).
Response: Returns the created aggregated sales data object.
Example Request:
json
Copy code
{
  "productId": "product15",
  "productDescription": "Running Shoes",
  "totalQuantitySold": 15,
  "totalRevenue": 450
}
Example Response:
json
Copy code
{
  "productId": "product15",
  "productDescription": "Running Shoes",
  "totalQuantitySold": 15,
  "totalRevenue": 450,
  "_id": "65ff4acee6112b5b11226236"
}
GET Aggregated Sales Data by ID
Endpoint: /api/agg_sales/:id
Description: Retrieves aggregated sales data by its unique ID.
Method: GET
Parameters: id (Unique identifier of the aggregated sales data).
Response: Returns the aggregated sales data object corresponding to the provided ID.
Example: /api/agg_sales/65ff4acee6112b5b11226236
PATCH Aggregated Sales Data
Endpoint: /api/agg_sales/:id
Description: Updates aggregated sales data by its unique ID.
Method: PATCH
Parameters: id (Unique identifier of the aggregated sales data).
Request Body: JSON object containing fields to be updated.
Response: Returns the updated aggregated sales data object.
Example Request:
json
Copy code
{
  "totalQuantitySold": 20
}
Example Response:
json
Copy code
{
  "_id": "65ff4acee6112b5b11226236",
  "productId": "product15",
  "productDescription": "Running Shoes",
  "totalQuantitySold": 20,
  "totalRevenue": 600
}
DELETE Aggregated Sales Data
Endpoint: /api/agg_sales/:id
http://localhost:4000/api/agg_sales/:id
Description: Deletes aggregated sales data by its unique ID.
Method: DELETE
Parameters: id (Unique identifier of the aggregated sales data).
Response: Returns a success message upon successful deletion.
Example: /api/agg_sales/65ff4acee6112b5b11226236
This README provides comprehensive information about the endpoints available for managing aggregated sales data in the Blissful Buys API. Use these endpoints to interact with the API and perform CRUD operations on aggregated sales data.