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
connection.connect(function (err, results) {
  start();
});


//Running this application will first display all of the items available for sale. Include the ids, names, and prices of products for sale.
function start() {

  connection.query("SELECT * FROM products", function (err, results) {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    for (var i = 0; i < results.length; i++) {
      console.log("Item ID: " + results[i].item_id + " | " + "Product Name: " + results[i].product_name + " | " + "Department Name: " + results[i].department_name + " | " + "Price: " + results[i].price + " | " + "Stock Quantity: " + results[i].stock);
    }

  });

  return;
};




// The app should then prompt users with two messages.
whatUBuying();

// The first should ask them the ID of the product they would like to buy.

function whatUBuying() {
  inquirer
    .prompt({
      name: "postOrBid",
      type: "list",
      message: "What is the ID of the item you want to buy",
      choices: ["PURCHASE", "EXIT"]
    })
    .then(function (answer) {
      // based on their answer, either call the bid or the post functionsww
      if (answer.postOrBid === "PURCHASE") {
        postAuction();
        // }
        // else if(answer.postOrBid === "BID") {
        //   bidAuction();
      } else {
        connection.end();
      }
    });
}

function postAuction() {
  // prompt for info about the item being put up for auction
  inquirer
    .prompt([
      {
        name: "item",
        type: "input",
        message: "What is the ID of the item you are looking to buy?"
        ,

        validate: function (value) {
          var valid = value.match(/^[0-9]+$/)
          if (valid) {
            return true
          }
          return 'Please enter a valid Product ID'
        }

      }, {
        name: "stockQuantity",
        type: "input",
        message: "How many would you like to purchase?",
        validate: function (value) {
          var valid = value.match(/^[0-9]+$/)
          if (valid) {
            return true
          }
          return 'Please enter a valid quantity.'
        }
      }
    ])
    .then(function (products) {

      // when finished prompting, insert a new item into the db with that info
      connection.query(
        "INSERT INTO products SET ?",
        {
          item_id: products.item,
          department_name: products.department_name,
          starting_bid: products.startingBid || 0,
          highest_bid: products.startingBid || 0
        },
        function (err) {
          if (err) throw err;
          console.log("Your auction was created successfully!");
          // re-prompt the user for if they want to bid or post
          start();
        }
      );
    });
}
// The second message should ask how many units of the product they would like to buy
function bidAuction() {
  // query the database for all items being auctioned
  connection.query("SELECT * FROM products", function (err, results) {
    if (err) throw err;
    // once you have the items, prompt the user for which they'd like to bid on
    inquirer
      .prompt([
        {
          name: "choice",
          type: "rawlist",
          choices: function () {
            var choiceArray = [];
            for (var i = 0; i < results.length; i++) {
              choiceArray.push(results[i].item_name);
            }
            return choiceArray;
          },
          message: "What auction would you like to place a bid in?"
        },
        {
          name: "bid",
          type: "input",
          message: "How much would you like to bid?"
        }
      ])
      .then(function (answer) {
        // get the information of the chosen item
        var chosenItem;
        for (var i = 0; i < results.length; i++) {
          if (results[i].item_name === answer.choice) {
            chosenItem = results[i];
          }
        }

        // determine if bid was high enough
        if (chosenItem.highest_bid < parseInt(answer.bid)) {
          // bid was high enough, so update db, let the user know, and start over
          connection.query(
            "UPDATE products SET ? WHERE ?",
            [
              {
                highest_bid: answer.bid
              },
              {
                id: chosenItem.id
              }
            ],
            function (error) {
              if (error) throw err;
              console.log("Bid placed successfully!");
              // start();
            }
          );
        }
        else {
          // bid wasn't high enough, so apologize and start over
          console.log("Your bid was too low. Try again...");
          start();
        }
      });
  });
}


// Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer's request.

//If not, the app should log a phrase like Insufficient quantity!, and then prevent the order from going through

//However, if your store does have enough of the product, you should fulfill the customer's order.

// This means updating the SQL database to reflect the remaining quantity.
// Once the update goes through, show the customer the total cost of their purchase.
