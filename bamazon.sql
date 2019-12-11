DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;
USE bamazon;
CREATE TABLE products(
id INT NOT NULL AUTO_INCREMENT,
  item_id INT(9) ,
  product_name VARCHAR(45) NOT NULL,
  department_name VARCHAR(45) NOT NULL,
  price INT default 0,
  stock INT default 0,
  PRIMARY KEY (id)
);

insert into products (product_name, department_name, price, stock)
VALUES ('Led Lights', 'Electronics', '20.00' , '100'),

SELECT * from products;

