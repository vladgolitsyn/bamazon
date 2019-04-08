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
VALUES ("Alexa Echo Plus", "Electronics", 149.99, 100);

INSERT INTO products (product_name, department_name, price, quantity)
VALUES ("Apple iPad", "Electronics", 500, 80);

INSERT INTO products (product_name, department_name, price, quantity)
VALUES ("Microfiber Sofa", "Furniture", 300, 50);

INSERT INTO products (product_name, department_name, price, quantity)
VALUES ("Swivell Chair", "Furniture", 80, 70);

INSERT INTO products (product_name, department_name, price, quantity)
VALUES ("Philips Indoor Grill", "Outdoor", 50, 20);

INSERT INTO products (product_name, department_name, price, quantity)
VALUES ("Wilson Trennis Racket", "Sports", 150, 30);

INSERT INTO products (product_name, department_name, price, quantity)
VALUES ("Babolat Trennis Racket", "Sports", 125, 40);

INSERT INTO products (product_name, department_name, price, quantity)
VALUES ("Make Your Bed", "Books", 12, 200);

INSERT INTO products (product_name, department_name, price, quantity)
VALUES ("Becoming", "Books", 15, 100);

INSERT INTO products (product_name, department_name, price, quantity)
VALUES ("Ghost Soldiers", "Books", 13, 150);





