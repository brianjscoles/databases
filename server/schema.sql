DROP DATABASE IF EXISTS chat;

CREATE DATABASE chat;

USE chat;

DROP TABLE IF EXISTS messages;

CREATE TABLE messages (
  objectId int NOT NULL AUTO_INCREMENT,
  username varchar(30) NOT NULL,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  roomname varchar(30) NOT NULL,
  text varchar(140) NOT NULL,
  PRIMARY KEY (ObjectID)
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < path/to/schema.sql
 *  to create the database and the tables.*/

