// Load dependecies
var mysql = require("mysql");

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
connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);

        connection.query("SELECT * FROM products", function(err, res) {
        if (err) throw err;
        console.log(res);
        });
        
    connection.end();
});
