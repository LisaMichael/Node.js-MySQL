DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;
USE bamazon;
CREATE TABLE products(
item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(45) NOT NULL,
  department_name VARCHAR(45) NOT NULL,
  price INT default 0,
  stock INT default 0,
  PRIMARY KEY (item_id)
);

insert into products (product_name, department_name, price, stock)
VALUES ('Led Lights', 'Electronics', '20.00' , '100');

insert into products (product_name, department_name, price, stock)
VALUES ('Lululemon', 'Clothing', '98.00' , '100');

insert into products (product_name, department_name, price, stock)
VALUES ('Playstation', 'Electronics', '300.00' , '10');

insert into products (product_name, department_name, price, stock)
VALUES ('Levis', 'Clothing', '40.00' , '500');

insert into products (product_name, department_name, price, stock)
VALUES ('ChanelNo5', 'Beauty', '70.00' , '200');

insert into products (product_name, department_name, price, stock)
VALUES ('Frye', 'Shoes', '200.00' , '170');

insert into products (product_name, department_name, price, stock)
VALUES ('Tiffany Choker', 'Jewelery', '600.00' , '300');

insert into products (product_name, department_name, price, stock)
VALUES ('Keurig', 'Kitchenware', '80.00' , '100');

insert into products (product_name, department_name, price, stock)
VALUES ('Louis Vuitton', 'Handbags', '2000.00' , '500');

insert into products (product_name, department_name, price, stock)
VALUES ('Frozen', 'Groceries', '9.00' , '1000');

insert into products (product_name, department_name, price, stock)
VALUES ('Fishing Rod', 'Sporting Good', '50.00' , '300');
SELECT * from products;

