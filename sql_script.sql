create database bamazon;

use bamazon;


create table products 
(
	item_id INT AUTO_INCREMENT NOT NULL,
   product_name VARCHAR(100) NOT NULL,
   department_name VARCHAR(100) NOT NULL,
   price DECIMAL(6, 2) NOT NULL,
   stock_quantity INT NOT NULL,
   primary key(item_id)
);

insert into products (product_name, department_name, price, stock_quantity) values ("Cards Against Humanity", "Toys and Games", 25.00, 100);
insert into products (product_name, department_name, price, stock_quantity) values ("Bamazon Echo", "Electronics", 179.99, 500);
insert into products (product_name, department_name, price, stock_quantity) values ("RollerMouse Red", "Electronics", 250.00, 50);
insert into products (product_name, department_name, price, stock_quantity) values ("The Invisible Landscape", "Books", 12.63, 420);
insert into products (product_name, department_name, price, stock_quantity) values ("iRobot", "Vacuums and Floor Care", 345.00, 100);
insert into products (product_name, department_name, price, stock_quantity) values ("The Illistrated Man", "Books", 12.99, 150);
insert into products (product_name, department_name, price, stock_quantity) values ("Iceland", "Books", 6000.00, 48);
insert into products (product_name, department_name, price, stock_quantity) values ("Jamaca Blue Mountian", "Coffee", 38.99, 900);
insert into products (product_name, department_name, price, stock_quantity) values ("Too Faced Sweet Peach Palette", "Makeup", 25.00, 500);
insert into products (product_name, department_name, price, stock_quantity) values ("Ayahuasca", "Entheogenic Brews", 1999.00, 10);