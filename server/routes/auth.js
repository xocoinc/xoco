const express = require("express")
const User = require("../models/User")
const router = express.Router()

require("../models/User")

router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  })
  res.send(newUser)
  try {
    const saveUser = await newUser.save()
    res.status(200).json(saveUser)
  } catch (err) {
    res.status(500).json(err)
  }
})
//login

module.exports = router
