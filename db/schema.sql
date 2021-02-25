-- Create the `burgers_db`.
drop database if exists burgers_db;
create database burgers_db;
-- use database
use  burgers_db;
-- create a burger table
create table burger(
    id int not null auto_increment,
    burger_name varchar(50) not null,
    devoured boolean not null,
    primary key(id)
);
