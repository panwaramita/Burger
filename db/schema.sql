-- Create the `burgers_db`.
create database if exists `burgers_db`;
-- use database
use database burgers_db;
-- create a burger table
create table burger(
    id int not null auto_increment,
    burger_name varchar(50) not null,
    devoured boolean not null
);
