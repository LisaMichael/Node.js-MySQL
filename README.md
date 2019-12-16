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

The app should then prompt users with two messages.

The first should ask them the ID of the product they would like to buy.
The second message should ask how many units of the product they would like to buy.

Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer's request.

If not, the app should log a phrase like Insufficient quantity!, and then prevent the order from going through.

However, if your store does have enough of the product, you should fulfill the customer's order.
This application will update the SQL database to reflect the remaining quantity.
Once the update goes through, show the customer the total cost of their purchase.

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















