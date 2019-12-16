
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


    connection.query('SELECT * FROM products', function (err, res) {
        for (var i = 0; i < res.length; i++) {

            console.log('Item Id: ' + res[i].item_id + ' '
                + ' Product: ' + res[i].product_name + ' ' + "DEPARTMENT: " + res[i].department_name + ' Price: $' + res[i].price + ' | ' + ' Available: ' + res[i].stock_quantity);
        }
        console.log(" ");
        start();
    })

}


function lowInventory() {
   
    connection.query("SELECT * FROM Products", function (err, data) {
        if (err) throw err;

        console.log();
        console.log("---------- Low Inventory List ----------");
        console.log("--------------------------------------------------------------------------------------------------");
        for (var i = 0; i < data.length; i++) {
            if (data[i].stock_quantity <= 5) {
                console.log("Item ID: " + data[i].item_id + " | " + "Product Name: " + data[i].product_name + " | " + "Department Name: " + data[i].department_name + " | " + "Price: " + data[i].price + " | " + "Stock Quantity: " + data[i].stock_quantity);
                console.log("--------------------------------------------------------------------------------------------------");
            }
        }
        start();
    });
};

function addInventory() {
    console.log();
    console.log("---------- Add to Inventory ----------");
    connection.query("SELECT * FROM Products", function (err, data) {
        if (err) throw err;
        var itemsArray = [];
        for (i = 0; i < data.length; i++) {
            itemsArray.push(data[i].product_name);
        }
        inquirer.prompt([{
            type: "list",
            name: "products",
            choices: itemsArray,
            message: "Which one items would you like to add to Inventory?"
        },
        {
            type: "input",
            name: "quantity",
            message: "How many would you like to add the Quantity?",
            validate: function (value) {
                if (isNaN(value) === false) {
                    return true;
                }
                return false;
            }
        }]).then(function (answer) {
            var currentQty;
            for (i = 0; i < data.length; i++) {
                if (data[i].product_name === answer.products) {
                    currentQty = data[i].stock_quantity;
                }
            }
            connection.query("UPDATE Products SET ? WHERE ? ", [{ stock_quantity: currentQty + parseInt(answer.quantity) }, { product_name: answer.products }], function (err, data) {
                if (err) throw err;
                console.log("The quantity was update!");
                start();
            });
        });
    });
};

function newProd() {
    console.log();
    console.log("---------- Add to Inventory ----------");

    const questions = [{
        type: "input",
        name: "product",
        message: "Product Name: "
    },
    {
        type: "input",
        name: "department",
        message: "Department Name: "

    },
    {
        type: "input",
        name: "price",
        message: "Price: "
    },
    {
        type: "input",
        name: "quantity",
        message: "Stock Quantity: "
    }];

    inquirer.prompt(questions).then(function (data) {
        let insertQuery = "INSERT INTO Products (product_name, department_name, price, stock_quantity) VALUES (?, ?, ?, ?)";
        connection.query(insertQuery, [data.product, data.department, data.price, data.quantity], function (err, data) {
            console.log("Products Added!");
        });
        start();
    })
    // }

}


