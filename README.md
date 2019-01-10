# Reserve.me

> An implementation of a restaurant reviews app.

## Related Projects

  - https://github.com/reserveMe/menu-cards-service
  - https://github.com/reserveMe/photo-carousel-server
  - https://github.com/reserveMe/reservation-calendar-service
  - https://github.com/reserveMe/reviews-proxy

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)


# CRUD |	url |	queries
--- | --- | --- 
CREATE | /restaurant/:id/create	| 
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
READ |	/restaurant/:id/reviews	| restaurant_id
UPDATE | api/restaurant/:id/reviews/update |	restaurant_id, review_id, modified entry
DELETE |	api/restaurant/:id/reviews/delete	| restaurant_id, review_id


## Usage

> 
* Run `npm install` within the root directory.
* Ensure Mongoose and Mongo are running. 
* In order to seed the database with 3,015 entries of review data, run `npm run seed`. 
* To start webpack, run `npm run react-dev`. 
* To start the Express server on port 3004, run `npm run server-dev`. 
* To run the test suite using Jest, run `npm run test`.

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

