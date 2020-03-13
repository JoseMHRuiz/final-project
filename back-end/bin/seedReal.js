require("dotenv").config();
const mongoose = require("mongoose");
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const Box = require("../models/Box");
const randomLocation = require("random-location");
const bcrypt = require("bcrypt");
const bcryptSalt = 10;
const User = require("../models/User");
const Comment = require("../models/Comments");
const { DBURL, DBDEPLOY } = process.env;

function dbConnect(cb) {
  mongoose
    .connect(`${DBDEPLOY}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(x => {
      console.log(
        `Connected to Mongo! Database name: "${x.connections[0].name}"`
      );
      cb();
    })
    .catch(err => {
      console.error("Error connecting to mongo", err);
    });
}

dbConnect(() => {
  const Madrid = {
    latitude: 40.4378698,
    longitude: -3.8196207
  };
  const R = 38500; // meters

  const idUser = [new mongoose.mongo.ObjectId()];
  const idComment = Array(3)
    .fill()
    .map(() => {
      return new mongoose.mongo.ObjectId();
    });
  const realComments = [
    {
      _id: idComment[0],
      comment:
        "Es uno de los mejores boxes, donde mejor te pueden enseñar sobre todo si eres principiante",
      user: idUser[0]
    },
    {
      _id: idComment[1],
      comment:
        "Tienen open box, por debajo del precio de la media y hay un ambiente cojonudo",
      user: idUser[0]
    },
    {
      _id: idComment[2],
      comment: "Buena cantindad de material, es uno de los boxes más grandes",
      user: idUser[0]
    }
  ];
  let user = {
    _id: idUser[0],
    username: "JoseMHR",
    password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
    email: "josemhr@gmail.com",
    userType: "owner",
    comments: idComment,
    img:
      "https://res.cloudinary.com/josemhruiz/image/upload/v1583357366/Sin-ti%CC%81tulo-1_rsfpe9.png"
  };

  const realBox = [
    {
      comments: [idComment[0]],
      boxName: "SingularBox",
      affiliate: true,
      area: 1300,
      city: "Madrid",
      direction: "Calle Ramón de Aguinaga",
      position: {
        latitude: 40.4269753,
        longitude: -3.6645918
      },
      openBox: false,
      dropBar: false,
      juniorClass: true,
      kidsClass: false,
      img: [
        "https://lh3.googleusercontent.com/proxy/D-vwdekD-aZTKkXOSO5I-iQrjWqRNCKrPFwe1Q3Dem4YZ9_3BRaCy8cq6VOrJzGD2ws5SDgdEBXY7l6d3rE32sUJjii8ycUUGZGM8thHzdvrHQwXmSD3XoVdm_6ne3F7"
      ],
      schedule: {
        mondayToFriday: {
          start: "7:00",
          end: "22:00"
        },
        saturday: {
          open: true,
          start: "10:00",
          end: "20:00"
        },
        sunday: {
          open: true,
          start: "10:00",
          end: "14:00"
        }
      },
      coach: {
        qty: 6,
        minCredential: "L1",
        maxCredential: "L2",
        otherCredentials: [
          "Gymnactics",
          "Strongman",
          "Competitors",
          "Aerobic Capacity",
          "Kettlebell"
        ]
      },
      material: {
        machines: [
          {
            name: "airunner",
            have: true,
            qty: 1,
            img:
              "https://smhttp-ssl-18062.nexcesscdn.net/media/prod.image/a/i/air-runner-4.jpg"
          },
          {
            name: "airbike",
            have: true,
            qty: 2,
            img:
              "https://www.roguefitness.com/media/wysiwyg/01_MaxStability.jpg"
          },
          {
            name: "skyerg",
            have: true,
            qty: 2,
            img:
              "https://www.rogueeurope.eu/media/wysiwyg/Ski-erg-advanced-content3-construction.jpg"
          },
          {
            name: "bikeerg",
            have: false,
            qty: 0,
            img:
              "https://www.roguefitness.com/media/catalog/product/cache/1/image/1500x1500/472321edac810f9b2465a359d8cdc0b5/c/o/concept2-bike-erg-web3.jpg"
          },
          {
            name: "rowerg",
            have: true,
            qty: 12,
            img:
              "https://www.rogueeurope.eu/media/catalog/product/cache/5/image/1500x1500/472321edac810f9b2465a359d8cdc0b5/c/o/concept2-black-rower-2_2_2.jpg"
          }
        ],
        rest: [
          {
            name: "dumbbell",
            upTo: 50,
            have: true,
            img:
              "https://www.rogueeurope.eu/media/catalog/product/cache/5/rogue_header_2015/1536x/472321edac810f9b2465a359d8cdc0b5/x/x/xx7447-lg_1.jpg"
          },
          {
            name: "kettlebell",
            upTo: 32,
            have: true,
            img:
              "https://www.roguefitness.com/media/catalog/product/cache/1/image/1500x1500/472321edac810f9b2465a359d8cdc0b5/r/o/rogue-competition-kettlebells-web16.jpg"
          },
          {
            name: "medball",
            upTo: 13,
            have: true,
            img:
              "https://www.roguefitness.com/media/catalog/product/cache/1/rogue_header_2015/1536x/472321edac810f9b2465a359d8cdc0b5/r/a/ra0730-lg.jpg"
          },
          {
            name: "dball",
            upTo: 60,
            have: true,
            img:
              "https://www.roguefitness.com/media/catalog/product/cache/1/rogue_header_2015/1536x/472321edac810f9b2465a359d8cdc0b5/r/u/rubber-medball-h.jpg"
          },
          {
            name: "sandbag",
            upTo: 70,
            have: true,
            img:
              "https://www.roguefitness.com/media/catalog/product/cache/1/rogue_header_2015/1536x/472321edac810f9b2465a359d8cdc0b5/c/u/cub-sm-sandbag-h.jpg"
          },
          {
            name: "yoke",
            upTo: 70,
            have: true,
            img:
              "https://www.roguefitness.com/media/catalog/product/cache/1/image/1500x1500/472321edac810f9b2465a359d8cdc0b5/m/i/mike-jenkins-6-web_1.jpg"
          },
          {
            name: "sleed",
            upTo: 40,
            have: true,
            img: "https://www.roguefitness.com/media/ds-highbar.jpg"
          },
          {
            name: "ghd",
            upTo: 4,
            have: true,
            img:
              "https://www.roguefitness.com/media/catalog/product/cache/1/image/1500x1500/472321edac810f9b2465a359d8cdc0b5/g/h/ghd-3_1_4.jpg"
          },
          {
            name: "barbells",
            upTo: 40,
            have: true,
            img: "https://www.roguefitness.com/media/wysiwyg/AC-C.jpg"
          },
          {
            name: "foamroller",
            upTo: 15,
            have: true,
            img:
              "https://www.roguefitness.com/media/catalog/product/cache/1/image/1500x1500/472321edac810f9b2465a359d8cdc0b5/r/o/rogue-foam-rollers-2.0-web3_1.jpg"
          },
          ,
        ]
      },
      prices: {
        dropin: 10,
        fullMonth: 95,
        fourDays: 0,
        threeDays: 0,
        twoDays: 0
      }
    },
    {
      comments: [idComment[1]],
      boxName: "C1 Club",
      affiliate: true,
      area: 1000,
      city: "Madrid",
      direction: "Calle Alegría Oria 1",
      position: {
        latitude: 40.4402378,
        longitude: -3.6334289
      },
      openBox: true,
      dropBar: true,
      juniorClass: true,
      kidsClass: true,
      img: [
        "http://www.c1crossfit.com/wp-content/uploads/2017/11/wod-c1-crossfit.jpg'"
      ],
      schedule: {
        mondayToFriday: {
          start: "7:00",
          end: "22:00"
        },
        saturday: {
          open: true,
          start: "10:00",
          end: "14:00"
        },
        sunday: {
          open: true,
          start: "10:00",
          end: "14:00"
        }
      },
      coach: {
        qty: 6,
        minCredential: "L1",
        maxCredential: "L3",
        otherCredentials: [
          "Gymnactics",
          "Strongman",
          "Competitors",
          "Aerobic Capacity",
          "Kettlebell",
          "Weightlifting"
        ]
      },
      material: {
        machines: [
          {
            name: "airunner",
            have: false,
            qty: 0,
            img:
              "https://smhttp-ssl-18062.nexcesscdn.net/media/prod.image/a/i/air-runner-4.jpg"
          },
          {
            name: "airbike",
            have: true,
            qty: 3,
            img:
              "https://www.roguefitness.com/media/wysiwyg/01_MaxStability.jpg"
          },
          {
            name: "skyerg",
            have: true,
            qty: 1,
            img:
              "https://www.rogueeurope.eu/media/wysiwyg/Ski-erg-advanced-content3-construction.jpg"
          },
          {
            name: "bikeerg",
            have: false,
            qty: 0,
            img:
              "https://www.roguefitness.com/media/catalog/product/cache/1/image/1500x1500/472321edac810f9b2465a359d8cdc0b5/c/o/concept2-bike-erg-web3.jpg"
          },
          {
            name: "rowerg",
            have: true,
            qty: 8,
            img:
              "https://www.rogueeurope.eu/media/catalog/product/cache/5/image/1500x1500/472321edac810f9b2465a359d8cdc0b5/c/o/concept2-black-rower-2_2_2.jpg"
          }
        ],
        rest: [
          {
            name: "dumbbell",
            upTo: 25,
            have: true,
            img:
              "https://www.rogueeurope.eu/media/catalog/product/cache/5/rogue_header_2015/1536x/472321edac810f9b2465a359d8cdc0b5/x/x/xx7447-lg_1.jpg"
          },
          {
            name: "kettlebell",
            upTo: 48,
            have: true,
            img:
              "https://www.roguefitness.com/media/catalog/product/cache/1/image/1500x1500/472321edac810f9b2465a359d8cdc0b5/r/o/rogue-competition-kettlebells-web16.jpg"
          },
          {
            name: "medball",
            upTo: 10,
            have: true,
            img:
              "https://www.roguefitness.com/media/catalog/product/cache/1/rogue_header_2015/1536x/472321edac810f9b2465a359d8cdc0b5/r/a/ra0730-lg.jpg"
          },
          {
            name: "dball",
            upTo: 50,
            have: true,
            img:
              "https://www.roguefitness.com/media/catalog/product/cache/1/rogue_header_2015/1536x/472321edac810f9b2465a359d8cdc0b5/r/u/rubber-medball-h.jpg"
          },
          {
            name: "sandbag",
            upTo: 0,
            have: false,
            img:
              "https://www.roguefitness.com/media/catalog/product/cache/1/rogue_header_2015/1536x/472321edac810f9b2465a359d8cdc0b5/c/u/cub-sm-sandbag-h.jpg"
          },
          {
            name: "yoke",
            upTo: 90,
            have: true,
            img:
              "https://www.roguefitness.com/media/catalog/product/cache/1/image/1500x1500/472321edac810f9b2465a359d8cdc0b5/m/i/mike-jenkins-6-web_1.jpg"
          },
          {
            name: "sleed",
            upTo: 40,
            have: true,
            img: "https://www.roguefitness.com/media/ds-highbar.jpg"
          },
          {
            name: "ghd",
            upTo: 1,
            have: true,
            img:
              "https://www.roguefitness.com/media/catalog/product/cache/1/image/1500x1500/472321edac810f9b2465a359d8cdc0b5/g/h/ghd-3_1_4.jpg"
          },
          {
            name: "barbells",
            upTo: 30,
            have: true,
            img: "https://www.roguefitness.com/media/wysiwyg/AC-C.jpg"
          },
          {
            name: "foamroller",
            upTo: 5,
            have: true,
            img:
              "https://www.roguefitness.com/media/catalog/product/cache/1/image/1500x1500/472321edac810f9b2465a359d8cdc0b5/r/o/rogue-foam-rollers-2.0-web3_1.jpg"
          },
          ,
        ]
      },
      prices: {
        dropin: 10,
        fullMonth: 95,
        fourDays: 0,
        threeDays: 0,
        twoDays: 0
      }
    }
  ];
  //   User.deleteMany().then(() => {
  //     console.log("User deleted");
  //   });
  User.create(user).then(() => {
    console.log("succesfully added the User to te data");
  });
  //   Comment.deleteMany().then(() => {
  //     console.log("Comment deleted");
  //   });
  Comment.create(realComments).then(() => {
    console.log("succesfully added the Commnet to te data");
  });
  //   Box.deleteMany().then(() => {
  //     console.log("Boxes deleted");
  //   });
  Box.create(realBox).then(() => {
    console.log("succesfully added the Box to te data now closing dtabase");
    mongoose.connection.close();
    process.exit(0);
  });
});
