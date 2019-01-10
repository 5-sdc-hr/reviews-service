DROP DATABASE IF EXISTS sdc;

CREATE DATABASE sdc;

\c sdc;

CREATE SCHEMA reserveme;

CREATE TABLE reserveme.reviews(
  id SERIAL NOT NULL,
  restaurant_id INTEGER,
  reviewer_id INTEGER,
  reviewer_nickname VARCHAR(20),
  reviewer_location VARCHAR(20),
  reviewer_review_count SMALLINT,
  reviewer_date_dined TIMESTAMP,
  review_id INTEGER,
  review_ratings_overall SMALLINT,
  review_ratings_food SMALLINT,
  review_ratings_service SMALLINT,
  review_ratings_ambience SMALLINT,
  review_ratings_value SMALLINT,
  review_ratings_noise_level VARCHAR(15),
  review_recommend_to_friend BOOLEAN,
  review_text TEXT,
  review_helpful_count SMALLINT,
  review_tags TEXT [],
  CONSTRAINT persons_pkey PRIMARY KEY (id)
);

COPY reserveme.reviews(
  restaurant_id,
  reviewer_id,
  reviewer_nickname,
  reviewer_location,
  reviewer_review_count,
  reviewer_date_dined,
  review_id,
  review_ratings_overall,
  review_ratings_food,
  review_ratings_service,
  review_ratings_ambience,
  review_ratings_value,
  review_ratings_noise_level,
  review_recommend_to_friend,
  review_text,
  review_helpful_count,
  review_tags
)
FROM '/Users/ronarbel/Desktop/reviews-service/database/generatedData.csv' CSV DELIMITER ',';


/*  Execute this file from the command line by typing:
 *    psql -U < database/schema.sql;
 *  to create the database and the tables.*/