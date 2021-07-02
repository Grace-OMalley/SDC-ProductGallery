CREATE DATABASE productgallery;

USE productgallery;

CREATE TABLE product (
  id int not null primary key AUTO_INCREMENT,
  product_id varchar(255)
);

CREATE TABLE images (
  img_url varchar(255)
);