const express = require("express")
const { getMpesaPassword } = require("../controllers/mpesa.controller")
const router = express.Router()

router.route("/password").get(getMpesaPassword)

module.exports = router
