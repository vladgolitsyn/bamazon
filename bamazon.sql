DROP DATABASE IF EXISTS bamazon_dB;

CREATE DATABASE bamazon_dB;

USE bamazon_dB;

CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(100) NOT NULL,
  price DECIMAL NOT NULL,
  quantity INT NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, quantity)
VALUES ("Alexa Echo Plus", "Electronics", 149.99, 100)