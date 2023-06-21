# Branded Thing API Documentation

## Endpoints :

List of available endpoints:

- `POST /product`
- `GET /products`
- `GET /product/:id`
- `DELETE /product/:id`
- `PUT /product/:id`
- `POST /order`
- `GET /orders`

&nbsp;

## 1. POST /product

Request:

- body:

```json
{
  "name": "string",
  "price": "integer",
  "imageUrl": "string",
  "description": "text"
}
```

_Response (201 - Created)_

```json
{
  "id": 13,
  "name": "Baju Baru",
  "description": "cool baju",
  "price": 10000,
  "imageUrl": "cources",
  "updatedAt": "2023-06-21T04:45:45.336Z",
  "createdAt": "2023-06-21T04:45:45.336Z"
}
```

_Response (500 - Internal Server Error)_

```json
{
  "message": "Internal Server Error"
}
```

&nbsp;

## 2. GET /products

Description:

- Get all product from database

Request:

- headers

_Response (200 - OK)_

```json
[
    {
        "id": 12,
        "name": "Komputer",
        "description": "alat kerja",
        "price": 190000,
        "imageUrl": "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=900&q=60",
        "createdAt": "2023-06-21T03:54:41.462Z",
        "updatedAt": "2023-06-21T03:54:54.664Z"
    },
    {
        "id": 13,
        "name": "Baju Baru",
        "description": "cool baju",
        "price": 10000,
        "imageUrl": "cources",
        "createdAt": "2023-06-21T04:45:45.336Z",
        "updatedAt": "2023-06-21T04:45:45.336Z"
    },
    {
        "id": 14,
        "name": "Baju Baru2",
        "description": "cool baju2",
        "price": 100002,
        "imageUrl": "cources2",
        "createdAt": "2023-06-21T04:46:55.396Z",
        "updatedAt": "2023-06-21T04:46:55.396Z"
    },
    ...,
]
```

_Response (500 - Internal Server Error)_

```json
{
  "message": "Internal Server Error"
}
```

&nbsp;

## 3. GET /product/:id

Description:

- Get product by id

Request:

- params:

```json
{
  "id": "integer(required)"
}
```

- body:

```json
-
```

_Response (200 - OK)_

```json
{
  "id": 12,
  "name": "Komputer",
  "description": "alat kerja",
  "price": 190000,
  "imageUrl": "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=900&q=60",
  "createdAt": "2023-06-21T03:54:41.462Z",
  "updatedAt": "2023-06-21T03:54:54.664Z"
}
```

_Response (500 - Internal Server Error)_

```json
{
  "message": "Internal Server Error"
}
```

## 4. DELETE /product/:id

Description:

- Delete product by id

Request:

- headers

```json
-
```

- params:

```json
{
  "id": "integer(required)"
}
```

_Response (200 - OK)_

```json
{
  "message": "Product deleted"
}
```

_Response (404 - Not Found)_

```json
{
  "message": "Product not found"
}
```

_Response (500 - Internal Server Error)_

```json
{
  "message": "Internal Server Error"
}
```

&nbsp;

## 5. PUT /update/:id

Description:

- Update product by id/primary key

Request:

- headers

```json
-
```

- params:

```json
{
  "id": "integer(required)"
}
```

- body:

```json
{
  "name": "string",
  "price": "integer",
  "imageUrl": "string",
  "description": "text"
}
```

_Response (200 - OK)_

```json
{
  "message": "Product updated"
}
```

_Response (404 - Not Found)_

````json
{
  "message": "Product not found"
}

_Response (500 - Internal Server Error)_

```json
{
  "message": "Internal Server Error"
}
````

&nbsp;

## 6. POST /order

Request:

- body:

```json
{
  "name": "masuk",
  "orders": [
    {
      "name": "baju",
      "description": "bagus",
      "price": 10000,
      "imageUrl": "string",
      "quantity": 2
    }
  ]
}
```

_Response (200 - Ok)_

```json
{
  "message": "successfully create order"
}
```

_Response (400 - Bad Request)_

```json
{
  "messsage": "failed to create customer"
}
```

_Response (500 - Internal Server Error)_

```json
{
  "message": "Internal Server Error"
}
```

&nbsp;

## 7. GET /orders

Description:

- Get all order from database

Request:

- headers

_Response (200 - OK)_

```json
[
  {
    "id": 1,
    "totalPrice": 20000,
    "CustomerId": 8,
    "createdAt": "2023-06-18T14:59:55.799Z",
    "updatedAt": "2023-06-18T14:59:55.799Z",
    "Customer": {
      "id": 8,
      "name": "randy",
      "createdAt": "2023-06-18T14:59:55.785Z",
      "updatedAt": "2023-06-18T14:59:55.785Z"
    }
  },
  {
    "id": 2,
    "totalPrice": 20000,
    "CustomerId": 11,
    "createdAt": "2023-06-18T15:03:38.376Z",
    "updatedAt": "2023-06-18T15:03:38.376Z",
    "Customer": {
      "id": 11,
      "name": "masuk",
      "createdAt": "2023-06-18T15:03:38.374Z",
      "updatedAt": "2023-06-18T15:03:38.374Z"
    }
  },
  ...,
]
```

_Response (500 - Internal Server Error)_

```json
{
  "message": "Internal Server Error"
}
```

&nbsp;
