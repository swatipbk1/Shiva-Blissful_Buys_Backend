# Blissful Buys API - Product Management

Welcome to the Blissful Buys API for managing products. This section of the API allows you to perform various operations related to products within the Blissful Buys platform. Below are instructions on how to interact with the API endpoints related to products.

API Endpoints
Create a New Product (POST):
Request Method: POST
URL: http://localhost:4000/api/products
Headers:
Content-Type: application/json
Request Body:
{
"\_id": "65fe6230d79d662ed22956e9",
"title": {
"shortTitle": "Home & Kitchen",
"longTitle": "Pigeon FAVOURITE Electric Kettle (1.5 L, Silver, Black)"
},
"price": {
"mrp": 1195,
"cost": 625,
"discount": "47%"
},
"prod_id": "product1",
"url": "https://rukminim1.flixcart.com/image/150/150/kapoo7k0/electric-kettle/p/6/s/pigeon-favourite-original-imafs7xhj5uwgrh4.jpeg?q=70",
"detailUrl": "https://rukminim1.flixcart.com/image/416/416/kapoo7k0/electric-kettle/p/6/s/pigeon-favourite-original-imafs7xhj5uwgrh4.jpeg?q=70",
"description": "Updated description goes here...",
"discount": "Updated discount goes here...",
"tagline": "Updated tagline goes here...",
"category": "Updated category goes here..."
}
Instructions
Set the request method to POST.
Use the URL http://localhost:4000/api/products.
Set the Content-Type header to application/json.
Include the product details in the request body as shown in the example.
Get All Products (GET):
Request Method: GET
URL: http://localhost:4000/api/products
Instructions:

Set the request method to GET.
Use the URL http://localhost:4000/api/products.
No additional parameters or headers needed.
Get Product by ID (GET):
Request Method: GET
URL: http://localhost:4000/api/products/:id
Instructions:

Set the request method to GET.
Use the URL http://localhost:4000/api/products/:id, replacing :id with the actual product ID.
No additional parameters or headers needed.
Update a Product (PATCH):
Updates an existing product.

Request Method:
PATCH
URL:
http://localhost:4000/api/products/:id
Headers:
Content-Type: application/json
Request Body:
json
Copy code
{
"discount": "Extra 10% Off",
"tagline": "Deal of the day",
"category": "Appliances"
}
Response:
Status: 200 OK
Body: The updated product object.

Delete a Product (DELETE):
Request Method: DELETE
URL: http://localhost:4000/api/products/:id
