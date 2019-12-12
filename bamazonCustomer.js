var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "joe4hire",
  database: "bamazon"
});

// connect to the mysql server and sql database
connection.connect(function(err) {
  start();
});



function start() {

  connection.query("SELECT * FROM products", function(err, results){
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    for(var i= 0; i < results.length; i++){
      console.log("Item ID: " + results[i].item_id + " | " + "Product Name: " + results[i].product_name + " | " + "Department Name: " + results[i].department_name + " | " + "Price: " + results[i].price + " | " + "Stock Quantity: " + results[i].stock_quantity);}
  // start();
  });
 
}

//Running this application will first display all of the items available for sale. Include the ids, names, and prices of products for sale.


// The app should then prompt users with two messages.

// The first should ask them the ID of the product they would like to buy.
// The second message should ask how many units of the product they would like to buy


// Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer's request.


//If not, the app should log a phrase like Insufficient quantity!, and then prevent the order from going through

//However, if your store does have enough of the product, you should fulfill the customer's order.

// This means updating the SQL database to reflect the remaining quantity.
// Once the update goes through, show the customer the total cost of their purchase.
