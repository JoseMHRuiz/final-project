require('dotenv').config()
const mongoose = require("mongoose");
// let faker = require("faker");
let faker = require("faker/locale/es");
const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const User = require('../models/User')
const Box = require('../models/Box')
const Tip = require('../models/Tip')
const Comment = require('../models/Comments')
const bcrypt = require("bcrypt");
const bcryptSalt = 10;
const randomLocation = require('random-location')


function dbConnect(cb) {
  mongoose
    .connect(`${process.env.DBURL}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(x => {
      console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
      cb();
    })
    .catch(err => {
      console.error("Error connecting to mongo", err);
    });
}

dbConnect(() => {
  let counter = 0;
  const city = ['Madrid']
  const area = ['300', '600', '1000']
  const days = [2, 5, 7]
  const duration = ['30min-1hour', '1-2 hours', '2-3 hours', '3 or more hours']
  const trueFlase = [true, true, false]
  const maxLv = ['L3', 'L4']
  const minLv = ['L1', 'L2']
  const startS = ['07:00', '08:00', '10:00']
  const endS = ['21:00', '22:00']
  const randomKg = [10, 20, 30, 40, 50, 60]
  const monthPricesFull = [90, 95, 100]
  const monthPrices4 = [70, 75, 80]
  const monthPrices3 = [60, 65]
  const monthPrices2 = [40, 45, 50]
  const dropInPrices = [10, 15, 20]
  const Madrid = {
    latitude: 40.4378698,
    longitude: -3.8196207
  }
  const R = 38500 // meters
  const typeTip = ['Food', 'Suplementation', 'Skills', 'Sleep']


  const idUser = Array(5)
    .fill()
    .map(() => {
      return new mongoose.mongo.ObjectId()
    })

  let users = [{
      _id: idUser[0],
      username: "Admin",
      password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
      email: 'admin@gmail.com',
      userType: 'owner'

    },
    {
      _id: idUser[1],
      username: "User1",
      password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
      email: 'user1@gmail.com',
    },
    {
      _id: idUser[2],
      username: "User2",
      password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
      email: 'user2@gmail.com',
    },
    {
      _id: idUser[3],
      username: "User3",
      password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
      email: 'user3@gmail.com',
    },
    {
      _id: idUser[4],
      username: "User4",
      password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
      email: 'user4@gmail.com',
    }
  ]


  let imgCityArr = ['https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&auto=format&fit=crop&w=3465&q=80',
    'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80',
    'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1495542779398-9fec7dc7986c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1936&q=80',
    'https://images.unsplash.com/photo-1514565131-fce0801e5785?ixlib=rb-1.2.1&auto=format&fit=crop&w=2532&q=80',
    'https://images.unsplash.com/photo-1444723121867-7a241cacace9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80'
  ]
  const fakeTips = Array(20)
    .fill()
    .map(() => {
      return {
        tiptitle: faker.lorem.sentence(),
        tip: faker.lorem.paragraph(),
        tipType: typeTip[randomInt(0, typeTip.length - 1)],
      }
    })
  randomLocation.randomCirclePoint(Madrid, R)
  const fakeComment = Array(100)
    .fill()
    .map(() => {
      return {
        comment: faker.lorem.sentence(),
        user: idUser[randomInt(0, idUser.length - 1)]
      }
    })
  const fakeBox = Array(50)
    .fill()
    .map(() => {
      daysCounter = days[randomInt(0, days.length - 1)]
      return {
        boxName: faker.name.jobTitle(),
        affiliate: trueFlase[randomInt(0, trueFlase.length - 1)],
        area: area[randomInt(0, area.length - 1)],
        city: city[randomInt(0, city.length - 1)],
        direction: faker.address.streetName(),
        position: randomLocation.randomCirclePoint(Madrid, R),
        openBox: faker.random.boolean(),
        dropBar: faker.random.boolean(),
        juniorClass: faker.random.boolean(),
        kidsClass: faker.random.boolean(),
        schedule: {
          mondayToFriday: {
            start: startS[randomInt(0, startS.length - 1)],
            end: endS[randomInt(0, endS.length - 1)]
          },
          saturday: {
            open: true,
            start: startS[randomInt(0, startS.length - 1)],
            end: endS[randomInt(0, endS.length - 1)]
          },
          sunday: {
            open: true,
            start: startS[randomInt(0, startS.length - 1)],
            end: endS[randomInt(0, endS.length - 1)]
          }
        },
        coach: {
          qty: randomInt(0, 6),
          minCredential: minLv[randomInt(0, minLv.length - 1)],
          maxCredential: maxLv[randomInt(0, maxLv.length - 1)],
          otherCredentials: ['Gymnactics', 'Kids', 'Strongman']
        },
        material: {
          machines: {
            airunner: {
              have: trueFlase[randomInt(0, trueFlase.length - 1)],
              qty: randomInt(0, 12)
            },
            airbike: {
              have: trueFlase[randomInt(0, trueFlase.length - 1)],
              qty: randomInt(0, 12)
            },
            skyerg: {
              have: trueFlase[randomInt(0, trueFlase.length - 1)],
              qty: randomInt(0, 12)
            },
            bikeerg: {
              have: trueFlase[randomInt(0, trueFlase.length - 1)],
              qty: randomInt(0, 12)
            },
            rowerg: {
              have: trueFlase[randomInt(0, trueFlase.length - 1)],
              qty: randomInt(0, 12)
            },
          },
          dumbell: {
            upTo: randomKg[randomInt(0, randomKg.length - 1)],
            have: trueFlase[randomInt(0, trueFlase.length - 1)]
          },
          kettlebell: {
            upTo: randomKg[randomInt(0, randomKg.length - 1)],
            have: trueFlase[randomInt(0, trueFlase.length - 1)]
          },
          medball: {
            upTo: randomKg[randomInt(0, randomKg.length - 1)],
            have: trueFlase[randomInt(0, trueFlase.length - 1)]
          },
          dball: {
            upTo: randomKg[randomInt(0, randomKg.length - 1)],
            have: trueFlase[randomInt(0, trueFlase.length - 1)]
          },
          sandbag: {
            upTo: randomKg[randomInt(0, randomKg.length - 1)],
            have: trueFlase[randomInt(0, trueFlase.length - 1)]
          },
          yoke: {
            upTo: randomKg[randomInt(0, randomKg.length - 1)],
            have: trueFlase[randomInt(0, trueFlase.length - 1)]
          },
          sleed: {
            upTo: randomKg[randomInt(0, randomKg.length - 1)],
            have: trueFlase[randomInt(0, trueFlase.length - 1)]
          },
          ghd: {
            upTo: randomKg[randomInt(0, randomKg.length - 1)],
            have: trueFlase[randomInt(0, trueFlase.length - 1)]
          },
          barbells: {
            upTo: randomKg[randomInt(0, randomKg.length - 1)],
            have: trueFlase[randomInt(0, trueFlase.length - 1)]
          },
          foamroller: {
            upTo: dropInPrices[randomInt(0, dropInPrices.length - 1)],
            have: trueFlase[randomInt(0, trueFlase.length - 1)]
          },
          band: {
            have: trueFlase[randomInt(0, trueFlase.length - 1)]
          },
        },
        prices: {
          dropin: dropInPrices[randomInt(0, dropInPrices.length - 1)],
          fullMonth: monthPricesFull[randomInt(0, monthPricesFull.length - 1)],
          fourDays: monthPrices4[randomInt(0, monthPrices4.length - 1)],
          threeDays: monthPrices3[randomInt(0, monthPrices3.length - 1)],
          twoDays: monthPrices2[randomInt(0, monthPrices2.length - 1)],
        }
      }
    })
  User.deleteMany()
    .then(() => {
      console.log('User deleted')
    })
  User.create(users)
    .then(() => {
      console.log('succesfully added the User to te data')
    })
  Tip.deleteMany()
    .then(() => {
      console.log('Tip deleted')
    })
  Tip.create(fakeTips)
    .then(() => {
      console.log('succesfully added the Tips to te data')
    })
  Comment.deleteMany()
    .then(() => {
      console.log('Comment deleted')
    })
  Comment.create(fakeComment)
    .then(() => {
      console.log('succesfully added the Commnet to te data')
    })
  Box.deleteMany()
    .then(() => {
      console.log('Boxes deleted')
    })
  Box.create(fakeBox)
    .then(() => {
      console.log('succesfully added the Box to te data now closing dtabase')
      mongoose.connection.close()
      process.exit(0)
    })
})