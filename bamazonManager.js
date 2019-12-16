
// VARIABLES 

// Adding dependencies and storing into variables
var mysql = require('mysql');
var inquirer = require('inquirer');


// var server = http.createServer(handleRequest);
var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'joe4hire',
    database: 'Bamazon'
});


// create my connection to the database and call start function

connection.connect(function (err) {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    start();
});


function start() {
    inquirer
        .prompt({
            name: "managerView",
            type: "list",
            message: "Please select a menu option",
            choices: [
                "View Products for Sale",
                "Low Inventory",
                "Add to Inventory",
                "Add New Product",
                "EXIT"]
        })
        .then(function (answer) {


            //  based on their answer, either view products
            if (answer.managerView === "View Products for Sale") {
                viewProducts();
            }
            else if (answer.managerView === "Low Inventory") {
                lowInventory();

            }
            else if (answer.managerView === "Add to Inventory") {
                addInventory();

            }
            else if (answer.managerView === "Add New Product") {
                newProd();

            }
            else {
                connection.end();
            }
        });
}


function viewProducts() {
    console.log("this is the view products code");

    connection.query('SELECT * FROM products', function (err, res) {
        for (var i = 0; i < res.length; i++) {

            console.log('Item Id: ' + res[i].item_id + ' '
                + ' Product: ' + res[i].product_name + ' ' + "DEPARTMENT: " + res[i].department_name + ' Price: $' + res[i].price + ' | ' + ' Available: ' + res[i].stock_quantity);
        }
    })
start();
    }


function lowInventory() {
            console.log("this is the low inventory code");
        }

function addInventory() {
            console.log("this is add to inventory code");
            start();
        }

function newProd() {
            console.log("this is new Product code");
        }

