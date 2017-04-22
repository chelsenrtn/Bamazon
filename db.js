
var mysql = require('mysql');
var inquirer = require('inquirer');

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Milooliver25!",
  database: "Bamazon"
})

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
  }
  makeTable();
})

var makeTable = function() {
  connection.query('SELECT * FROM products', function(err, res) {
    if (err) throw err;
    var tab = "\t";
    console.log("ItemID\tProduct Name\tDepartment Name\tPrice\t# In Stock");
    console.log("--------------------------------------------------------");
    for (var i = 0; i < res.length; i++) {
        console.log(res[i].item_id + tab + res[i].product_name + tab + res[i].department_name + tab + res[i].price + tab + res[i].stock_quantity);
    }
    console.log("--------------------------------------------------------");
    promptCustomer(res);
  });
};

var promptCustomer = function(res) {
  inquirer.prompt([{
    type: 'input',
    name: 'choice',
    message: 'What would you like to purchase?'
  }]).then(function(val) {
    var correct = false;
    for (var i = 0; i < res.length; i++) {
      if (val.choice == res[i].product_name) {
        var quantity = res[i].stock_quantity;
        var id = res[i].item_id;
        var name = res[i].product_name;
        var price = res[i].price;
        correct = true;
        var checkQuantity = function() {
          inquirer.prompt([{
            type: 'input',
            name: 'quantity',
            message: 'How many would you like to buy?'
          }]).then(function(response) {
            if (response.quantity < quantity) {
              connection.query(`UPDATE products SET stock_quantity=${quantity - response.quantity} WHERE item_id=${id}`, function(err, res) {
                if (err) throw err;

                console.log(`Congratulations! You are the new owner of ${response.quantity} ${name}(s), for the low price of $${price * response.quantity}!!`);
                return;
              });
            } else {
              console.log("Please enter a quantity less than " + quantity);
              checkQuantity();
            };
          });
        };
        checkQuantity();
      };
    };
  });
};
