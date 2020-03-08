const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const boxSchema = new Schema(
  {
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user"
    },
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: "comment"
      }
    ],
    boxName: String,
    affiliate: Boolean,
    area: Number,
    city: String,
    direction: String,
    position: {
      latitude: Number,
      longitude: Number
    },
    openBox: Boolean,
    dropBar: Boolean,
    juniorClass: Boolean,
    kidsClass: Boolean,
    img: {
      type: Array,
      default: [
        "https://images.unsplash.com/photo-1519311965067-36d3e5f33d39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3902&q=80"
      ]
    },
    schedule: {
      mondayToFriday: {
        start: String,
        end: String
      },
      saturday: {
        open: Boolean,
        start: String,
        end: String
      },
      sunday: {
        open: Boolean,
        start: String,
        end: String
      }
    },
    coach: {
      qty: Number,
      minCredential: {
        type: String,
        enum: ["L1", "L2", "L3", "L4"]
      },
      maxCredential: {
        type: String,
        enum: ["L1", "L2", "L3", "L4"]
      },
      otherCredentials: [String]
    },
    material: {
      machines: [
        {
          name: String,
          have: Boolean,
          qty: Number
        }
      ],
      rest: [
        {
          name: String,
          have: Boolean,
          upTo: Number
        }
      ]
    },
    prices: {
      dropin: Number,
      fullMonth: Number,
      fourDays: Number,
      threeDays: Number,
      twoDays: Number
    }
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const Box = mongoose.model("box", boxSchema);
module.exports = Box;
