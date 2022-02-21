const express = require("express")
const User = require("../models/User")
const router = express.Router()
const cryptoJs = require("crypto-js")
const jwt = require("jsonwebtoken")

//schema
require("../models/User")

//register
router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: cryptoJs.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC,
    ).toString(),
  })
  try {
    const savedUser = await newUser.save()
    res.status(201).json(savedUser)
  } catch (err) {
    res.status(500).json({ message: "User is not created" })
  }
})
//login
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username })
    if (!user) {
      res.status(500).json({ message: "incorrect username" })
    }

    const decryptedPassword = cryptoJs.AES.decrypt(
      user.password,
      process.env.PASS_SEC,
    )
    const password = decryptedPassword.toString(cryptoJs.enc.Utf8)
    if (password !== req.body.password) {
      res.status(500).json({ message: "Incorrect password" })
    }
    //jwt
    const accesToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SEC,
      { expiresIn: "2d" },
    )

    const { Password, ...others } = user._doc

    res.status(200).json({ ...others, accesToken })
  } catch (err) {
    res.status(500).json({ message: "User not found" })
  }
})

module.exports = router
