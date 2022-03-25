const express = require("express")
const {
  getMpesaPassword,
  stkPush,
  token,
} = require("../controllers/mpesa.controller")
const router = express.Router()

router.route("/password").get(getMpesaPassword)
router.route("/stkpush").post(token, stkPush)

module.exports = router
