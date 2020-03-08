const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: String,
    password: String,
    userType: {
      type: String,
      enum: ["owner", "user"],
      default: "user"
    },
    img: {
      type: String,
      default:
        "https://res.cloudinary.com/josemhruiz/image/upload/v1583357366/Sin-ti%CC%81tulo-1_rsfpe9.png"
    },
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: "comment"
      }
    ],
    property: [
      {
        type: Schema.Types.ObjectId,
        ref: "box"
      }
    ],
    email: String,
    googleID: String
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
