const express = require('express');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

module.exports = router;


router.post("/boxs", (req, res, next) => {
  const currentUser = req.user;
  const {
    days,
    budget,
    tagsWanted,
    tagsNotWanted
  } = req.body;
  arrTagsWanted = tagsWanted.split(',');
  arrTagsNotWanted = tagsNotWanted.split(',');
  numberDays = +days;
  tripBudget = budget;

  Box.find({
      $and: [{
        days: {
          $size: numberDays
        }
      }, {
        budget: tripBudget
      }, {
        tags: {
          $all: arrTagsWanted
        }
      }, {
        tags: {
          $nin: arrTagsNotWanted
        }
      }]
    })
    .populate('user')
    .then(data => {
      let numberOfBoxes = {};
      let cities = data.map(box => (box = box.city));
      let defCities = cities.filter(city => {
        if (numberOfBoxes[city.name]) {
          numberOfBoxes[city.name] += 1;
          return false;
        } else {
          numberOfBoxes[city.name] = 1;
          return true;
        }
      });

      for (city in numberOfBoxes) {
        defCities.forEach(city1 => {
          if (city1.name === city) {
            city1.total = numberOfBoxes[city]
          }
        });
      }

      const searchParams = {
        days,
        budget,
        tagsWanted,
        tagsNotWanted
      };
      let dataPayload = {
        defCities,
        searchParams,
        currentUser
      };

      res.json(dataPayload);
    })
    .catch(err => console.log(err));
});