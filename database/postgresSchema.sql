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


/*  Execute this file from the command line by typing:
 *    psql -U < database/schema.sql;
 *  to create the database and the tables.*/