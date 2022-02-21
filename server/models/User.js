const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema(
  {
    isAdmin: {
      type: Boolean,
      default: false,
      required: true,
    },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    img: { type: String },
  },
  { timestamps: true },
)

module.exports = mongoose.model("User", UserSchema)
