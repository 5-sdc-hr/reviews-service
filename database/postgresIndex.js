require('dotenv').config();

const { Pool } = require('pg');

const pool = new Pool({
  user: `${process.env.PG_USER}`,
  host: `${process.env.PG_HOST}`,
  database: `${process.env.PG_DATABASE}`,
  password: `${process.env.PG_PASSWORD}`,
  port: `${process.env.PG_PORT}`,
});

pool.query('SELECT * FROM reserveme.reviews WHERE restaurant_id=1;', (err, res) => {
  console.log(err, res.rows[0]);
});

const retrieveReviews = (restId, cb) => {
  pool.query(`SELECT * FROM reserveme.reviews WHERE restaurant_id=${restId}`, (err, reviews) => {
    if (err) console.log(err);

    const formattedReviews = reviews.rows.map((review) => {
      return {
        restaurant: {
          id: review.restaurant_id,
        },
        reviewer: {
          id: review.reviewer_id,
          nickname: review.reviewer_nickname,
          location: review.reviewer_location,
          review_count: review.reviewer_review_count,
          date_dined: review.reviewer_date_dined,
        },
        review: {
          id: review.review_id,
          ratings: {
            overall: review.review_ratings_overall,
            food: review.review_ratings_food,
            service: review.review_ratings_service,
            ambience: review.review_ratings_ambience,
            value: review.review_ratings_value,
            noise_level: review.review_ratings_noise_level,
          },
          recommend_to_friend: review.review_recommend_to_friend,
          text: review.review_text,
          helpful_count: review.review_helpful_count,
          tags: review.review_tags,
        },
      };
    });

    cb(formattedReviews);
  });
};

module.exports = { retrieveReviews };
