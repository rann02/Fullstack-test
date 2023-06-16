
**Create product management server using nodejs ( expressjs, or other framework) with this criteria:**
**Database (Provide ERD)**

-   Table products
	-   id
	-   name
	-   description
	-   price
	-   image_url
-   Table orders
	-   id
	-   Total_price
-   Table customers
	-   id
	-   name

**API (Provide API documentation)**
-   **CRUD product**
	-   Create product API
	-   Read all products API
	-   Read product by id API
	-   Update product API
	-   Delete product API

-   **Create orders API**
Body:
	-   Array of products
	-   Customer name
Response:

-   200
	-  { success: true, message: ‘successfully create order’ }
-  400
	- { success: false, message: ‘failed to create customer’ }    

Create order flow:
1.  Create customer
2.  Create orders

Specifications:
-   We don’t want customer without order
-   We don’t want any order without customer
-   We prefer you use React, but feel free to use Vue
-   We prefer you use SCSS instead of CSS


* If you think this design needs more table or additional flow, feel free to add those.
* feel free to use your preferred architecture 
* fork this repo
* 3 type of branch need for git flow master/main,development, and feature
* after developing a feature commit and push to development and development to master
* make sure there are no bugs when commiting into master
* documentation for backend needed
