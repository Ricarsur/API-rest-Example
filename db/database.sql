CREATE DATABASE IF NOT EXISTS dbcompany;

USE dbcompany;

CREATE TABLE employees (
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    salary INT(45) NOT NULL,
    PRIMARY KEY (id)
);

DESCRIBE employees;

INSERT INTO employees VALUES 
    (1, 'John', 'john@gmailcom', '1000'),
    (2, 'Peter', 'peter@gmailcom', '2000'),
    (3, 'Mary', 'mary@gmailcom', '3000'),
    (4, 'Julie', 'julie@gmailcom', '4000'),
    (5, 'Bill', 'bill@gmailcom', '5000');

