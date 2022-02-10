const express = require("express")
const Cart = require("../models/Cart")
const router = express.Router()
require("../models/Cart")

router.post("/cart", async (req, res) => {
  const newCart = new Cart({
    userId: req.body.userId,
    productId: req.body.productId,
    quantity: req.body.quantity,
  })
  const saveCart = await newCart.save()
  res.json(saveCart)
})

module.exports = router
