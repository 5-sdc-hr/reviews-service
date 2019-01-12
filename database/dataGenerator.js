const faker = require('faker');
const fs = require('fs');

// -------- faker functions -------- //
const generateNickname = () => faker.name.firstName() + faker.name.lastName().slice(0, 1);
const generateLocation = () => faker.address.city();
const generateReviewCount = () => faker.random.number({ min: 1, max: 27 });
const generateDateDined = () => faker.date.between('2016-01-01', '2018-12-21');
const generateRatings = () => faker.random.number({ min: 1, max: 5 });
const generateNoiseLevel = () => faker.random.arrayElement(['do not recall', 'quiet', 'moderate', 'energetic']);
const generateRecommend = () => faker.random.boolean();
const generateReviewContent = () => faker.lorem.paragraph();
const generateHelpfulCount = () => faker.random.number({ min: 0, max: 3 });
const generateTags = () => {
  const tagsArr = [];
  let randNum = faker.random.number({ min: 0, max: 6 });
  while (randNum) {
    tagsArr.push(faker.random.arrayElement([
      '"Late-night Find"',
      '"Waterfront"',
      '"Great for Lunch"',
      '"Happy Hour"',
      '"Bar Seating"',
      '"Worth the Drive"',
      '"Creative Cuisine"',
      '"Hot Spot"',
      '"Paleo Friendly"',
      '"Afternoon Tea"',
      '"Sunday Lunch"',
      '"Gluten Free Options"',
      '"Spicy"',
      '"Good for Birthdays"',
      '"Afternoon Coffee"',
      '"Good for Groups"',
      '"Notable Wine List"',
      '"Fit for Foodies"',
      '"Good Vegetarian Options"',
      '"Scenic View"',
      '"Handcrafted Cocktails"',
      '"People Watching"',
      '"Good for Anniversaries"',
      '"Quiet Conversation"',
      '"Disabled Access"',
      '"Local Ingredients"',
      '"Seasonal"',
      '"Fun"',
      '"Pre/post Theatre"',
      '"Authentic"',
      '"Live Sports"',
      '"Vibrant Bar Scene"',
      '"Great for Outdoor Dining"',
      '"Comfort Food"',
      '"Great Beer"',
      '"Tasting Menu"',
      '"Tapas"',
      '"Organic"',
      '"Vegan"',
      '"Live Music"',
      '"Special Occasion"',
      '"Business Meals"',
      '"Quick Bite"',
      '"Healthy"',
      '"Great for Brunch"',
      '"Organic"',
      '"Romantic"',
      '"Good for a Date"',
      '"Neighborhood Gem"',
      '"Cozy"',
      '"Casual"',
    ]));
    randNum -= 1;
  }
  return tagsArr;
};
const generateRestaurantId = () => faker.random.number({ min: 1, max: 10000000 });


// -------- review generator --------- //
const generateReview = (i) => {
  const newReview = [
    generateRestaurantId(),
    i,
    `'${generateNickname()}'`,
    `'${generateLocation()}'`,
    generateReviewCount(),
    `'${generateDateDined()}'`,
    i,
    generateRatings(),
    generateRatings(),
    generateRatings(),
    generateRatings(),
    generateRatings(),
    `'${generateNoiseLevel()}'`,
    generateRecommend(),
    `'${generateReviewContent()}'`,
    generateHelpfulCount(),
    `"{${generateTags()}}"`,
  ];

  return newReview.toString();
};

// -------- create and save reviews to csv -------- //
const createAndSaveReviews = (numberOfReviews) => {
  const stream = fs.createWriteStream('database/generatedData/generatedData.csv');
  let i = 1;

  const write = () => {
    let proceed = true;
    while (i <= numberOfReviews && proceed) {
      const newReview = generateReview(i);
      proceed = stream.write(newReview.concat('\n'), (err) => {
        if (err) { console.err(err); }
      });
      i += 1;
    }

    if (!proceed) {
      stream.once('drain', () => {
        write();
      });
    }
  };

  write();
};

// -------- initialization -------- //
const numberOfReviews = 5;
console.log(`--- Initializing data generation for ${numberOfReviews} reviews`);
createAndSaveReviews(numberOfReviews);
