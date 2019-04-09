# bamazon

### Bamazon CLI/SQL Application Details

The bamazon CLI application has the following 3 main features:
1. A Bamazon Customer application which enables viewing and purchasing in-stock products (minimum requirement). - COMPLETED
2. A Bamazon Manager application which provides a user ability to view and update producs and their investory. - IN PROCESS
3. A Bamazon Supervisor application which provides a user ability to view proeicytrs sales by department with ability to add departments. - IN PROCESS

#### Technical Prerequisites

In order for the bamazon javascript logic to function, the following NPM packages need to be installed:
1. 'mysql' - required to query sql database files
2. 'inquirer' - required for the CLI application user input interface

A package.json file was created to store all of these NPM package dependencies.

### Bamazon Customer

The following is a quick specification which details the features of the Bamazon Customer application.  All of the logic is stored in the following two files:
1. bamazon.sql - containst the database tables required to track products, investory and cost.
2. bamazonCustomer.js - javascript which executes the application logic.

#### Feature Summary

Once the user enters "node bamazonCustomer.js" in the terrminal, he/she is prompted with an inquirer question asking if he/she "Would you like to see a list of available products?" 
![Initial Question](/images/initialq.jpg)
Based on the user response, the application returns the following:
* **No** - dB connection ends and user presented with the following message "Thank you for visiting Vlad's online store!"
![Initial Question No](/images/initialq_no.jpg)
* **Yes** - list of available products, with ID, name, departmment, and available qty, is presented and user is prompted with next inquier question "Please enter ID for product you wish to purchase".
![Initial Question Yes](/images/initialq_yes.jpg)
![Initial Question Yes Enter Product ID](/images/enter_id.jpg)
Once the user submits the product ID (based on ID value from response), he/she is prompted with another inquirer question to enter purchase quantity.
* If the quntity is **unavailable** (user-entered quantity > available quantity), user presentd with error and dB connection terminates.
![Insufficient Quantity](/images/enter_qty_insufficient.jpeg)
* If the quntity is **available** (user-entered quantity <= available quantity), user presented with successfule purchase message, total calculated cost of order, and dB connection terminates.
![Order Placed](/images/order_placed.jpg)

Thank you!
