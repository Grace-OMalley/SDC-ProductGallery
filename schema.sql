CREATE DATABASE productgallery;

USE productgallery;

CREATE TABLE images (
  product_id int,
  img_url varchar(255),
  tag_id int
);

CREATE TABLE tags (
  id int not null primary key AUTO_INCREMENT,
  tag_name varchar(255)
);

ALTER TABLE images ADD FOREIGN KEY (tag_id) REFERENCES tags (id);