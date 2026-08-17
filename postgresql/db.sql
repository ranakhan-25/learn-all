-- create database
CREATE DATABASE bookDB;

-- create table
create table books (
  id varchar(20) primary key,
  name varchar(20),
  description varchar(250)
);

-- insert row
const result = await pool.query("INSERT INTO books (id, name,description) VALUES ($1,$2,$3) RETURNING *", [id,name,description])

-- read all rows
const result = await pool.query("select * from books");

-- read by id
const result = await pool.query("select * from books where id=$1", [id]);

-- delete by id
const result = await pool.query("delete from books where id=$1", [id]);

-- update row
const result = await pool.query("update books set name=$1, description=$2 where id=$3 returning *", [name, description, id]);
