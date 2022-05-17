-- for help: \?

-- to list databases: \l

-- create database: CREATE DATABASE [name]

-- to connect to different database: \c [name]

-- create a table:
CREATE TABLE products (
    id INT,
    name VARCHAR(50),
    price INT,
    on_sale BOOLEAN
);

CREATE TABLE restaurants (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    location VARCHAR(50) NOT NULL,
    price_range INT NOT NULL check(price_range >= 1 and price_range <= 5)
);

-- to list all tables: \d

-- to see the schema of the table: \d [table name]

-- to add a new column to an existing table:
ALTER TABLE products ADD COLUMN featured BOOLEAN;

-- to delete a column from a table:
ALTER TABLE products DROP COLUMN featured;

-- to delete a table:
DROP TABLE products;

-- to delete database:
DROP DATABASE practice;

-- to insert data into the table:
INSERT INTO restaurants (id, name, location, price_range) VALUES (123, 'McDonalds', 'New York', 3);