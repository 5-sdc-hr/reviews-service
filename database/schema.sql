DROP DATABASE IF EXISTS fec;

CREATE DATABASE fec;

\c fec;

CREATE schema friends;

CREATE TABLE friends.test(
  id SERIAL NOT NULL, 
  firstname CHAR(15), 
  lastname CHAR(15),
  CONSTRAINT persons_pkey PRIMARY KEY (id)
);

INSERT INTO friends.test VALUES(0, 'mike', 'smith2');

COPY friends.test(firstname, lastname) 
FROM '/Users/ronarbel/Desktop/reviews-service/database/generatedData.csv' DELIMITER ',';

-- CREATE TABLE rooms (
--   id int NOT NULL AUTO_INCREMENT,
--   roomname varchar(50),
--   PRIMARY KEY (id)
-- );
-- ALTER TABLE rooms AUTO_INCREMENT=1;

-- CREATE TABLE username (
--   id int NOT NULL AUTO_INCREMENT,
--   username varchar(50),
--   PRIMARY KEY (id)
-- );
-- ALTER TABLE username AUTO_INCREMENT=1;

-- CREATE TABLE messages (
--   id int NOT NULL AUTO_INCREMENT,
--   username_id int NOT NULL,
--   roomname_id int NOT NULL,
--   text varchar(400),
--   PRIMARY KEY (id),
--   FOREIGN KEY (username_id) REFERENCES username(id),
--   FOREIGN KEY (roomname_id) REFERENCES rooms(id)
-- );
-- ALTER TABLE messages AUTO_INCREMENT=1;
/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u student < server/schema.sql;
 *  to create the database and the tables.*/