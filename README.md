###### AUTHOR: Lisa Michael -  ROLE: DEVELOPER
###### HW: WK10 - Node.js-MySQL aka bamazon
###### url: https://lisamichael.github.io/Node.js-MySQL/.

# Node.js-MySQL
homework wk12 - Node.js &amp; MySQL

INSTRUCTIONS FOR USE: 
- Create a MYSQL database called bamazon. 
- You can use bamazon.sql to create the database.
- bamazon.sql will also create a table named products and it will also create 10 records for your products table 

Node Package Manager instructions: 
- From a git bash command line, you must run the command: npm i

This CLI application requires the use of inquirer and mysql

From the git bash command line, run the commands: 
npm install mysql 
npm install inquirer 

This repository contains two applications: 
### Customer View: bamazonCustomer.js 
Description: 
Running this application will first display all of the items available for sale. Include the ids, names, and prices of products for sale.
![image](https://user-images.githubusercontent.com/24717213/70877829-1f0cbe00-1f8d-11ea-8b9b-d5bb8492a133.png)

The app should then prompt users with two messages.

The first should ask them the ID of the product they would like to buy.
![image](https://user-images.githubusercontent.com/24717213/70878059-eae5cd00-1f8d-11ea-82ee-87600c2ff3fd.png)

The second message should ask how many units of the product they would like to buy.

![image](https://user-images.githubusercontent.com/24717213/70878193-7d866c00-1f8e-11ea-9e48-0cfe0989cd7a.png)



Once the customer has placed the order, the application checks if the store has enough of the product to meet the customer's request.

If not, the app responds back with message "Insufficient quantity!", and then prevents the order from going through.

![image](https://user-images.githubusercontent.com/24717213/70878232-9ee75800-1f8e-11ea-8296-3b8371d52674.png)


However, if the store does have enough of the product, it will fulfill the customer's order.
![image](https://user-images.githubusercontent.com/24717213/70878391-43699a00-1f8f-11ea-970f-eb21869170fa.png)


This application will update the SQL database to reflect the remaining quantity.

![image](https://user-images.githubusercontent.com/24717213/70878711-8b3cf100-1f90-11ea-86e2-992b740f9cf7.png)

Once the update goes through, show the customer the total cost of their purchase.

![image](https://user-images.githubusercontent.com/24717213/70878595-1c5f9800-1f90-11ea-838f-91b4298fcd88.png)


### Manager View: bamazonManager.js

Running this application will:

### List a set of menu options:

### View Products for Sale: 
When a manager selects View Products for Sale, the app should list every available item: the item IDs, names, prices, and quantities.

### View Low Inventory
When a manager selects View Low Inventory, this will list all items with an inventory count lower than five.

### Add to Inventory
When a manager selects Add to Inventory, the application displays a prompt that will let the manager "add more" of any item currently in the store.

### Add New Product 
When a manager selects Add New Product, it allows the manager to add a completely new product to the store.

### Exit 
Selecting Exit will exit you from the application 















