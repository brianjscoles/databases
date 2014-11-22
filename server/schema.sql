CREATE DATABASE chat;

USE chat;

DROP TABLE IF EXISTS messages;

CREATE TABLE messages (
  ObjectId int NOT NULL AUTO_INCREMENT,
  Author varchar(30) NOT NULL,
  CreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  Room varchar(30) NOT NULL,
  Text varchar(140) NOT NULL,
  PRIMARY KEY (ObjectID)
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < path/to/schema.sql
 *  to create the database and the tables.*/

