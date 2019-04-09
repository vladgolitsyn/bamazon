// Load dependecies
var mysql = require("mysql");
var inquirer = require("inquirer");
// var Table = require("cli-table");

// create local dB connection

var connection = mysql.createConnection({
  host: "localhost",
  // Your port; if not 3306
  port: 3306,
  // Your username
  user: "root",
  // Your password
  password: "",
  database: "bamazon_dB"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);

  function initialInquiry() {
    inquirer
      .prompt({
        name: "action",
        type: "list",
        message: "Would you like to see a list of available products?",
        choices: ["Yes", "No"]
      })
      .then(function(answer) {
        switch (answer.action) {
          case "Yes":
            productSearch();
            break;

          case "No":
            console.log("Thank you for visiting Vlad's online store!");
            connection.end();
        }
      });
  }

  function productSearch() {
    connection.query("SELECT * FROM products", function(err, res) {
      if (err) throw err;

      console.log(JSON.stringify(res, " ", 2));

      inquirer
        .prompt([
          {
            name: "id",
            type: "input",
            message: "Please enter ID for product you wish to purchase"
          },
          {
            name: "quantity",
            type: "input",
            message: "Please enter purchase quantity"
          }
        ])
        .then(function(answer) {
          connection.query(
            `SELECT * FROM products WHERE id="${answer.id}"`,
            function(err, res) {
              if (err) throw err;

              console.log(JSON.stringify(res, " ", 2));
              checkQuantity(answer, res);
            }
          );
        });
    });
  }

  function checkQuantity(answer, response){
    var product = response[0];
    if (answer.quantity <= product.quantity) {
        connection.query(
          "UPDATE products SET ? WHERE ?",
          [
            {
              quantity:
                parseInt(product.quantity) - parseInt(answer.quantity),
            },
            {
              id: answer.id
            }
          ],
          function(error) {
            if (error) throw error;
            var message = [
              `Your order has been placed successfully!\n`,
              `Your order cost is $ ${answer.quantity * product.price}.`
            ];
            console.log(message);
            connection.end();
          }
        );
      } else {
        console.log("There is insufficient inventory quanity");
        connection.end();
      }
  };

initialInquiry();

});

// NOTE TO TA: I attempted to retreive a table using the cli-table package but could not get the logic to work...

//   var products = new Table({
//     head: ["ID", "Product Name", "Department", "Price", "Quantity"],
//     colWidths: [5, 25, 25, 10, 30]
//   });

//   products.forEach(
//     ({ id, product_name, department_name, price, quantity }) => {
//       table.push([id, product_name, department_name, price, quantity]);
//     }
//   );
//   console.log(products.toString());
