//keys
const datetime = require("node-datetime")
const dotenv = require("dotenv")
dotenv.config()

const comsumerKey = process.env.CONSUMER_KEY
const consumerSecret = process.env.CONSUMER_SECRET
const passKey = process.env.PASS_KEY
const shortCode = process.env.SHORT_CODE

const newPass = () => {
  const date = datetime.create()
  const format = date.format("YmdHMS")
  const passString = shortCode + passKey + format
  const encodedPass = Buffer.from(passString).toString("base64")

  return encodedPass
}

exports.getMpesaPassword = async (req, res) => {
  res.status(200).json({ Pass: newPass() })
}
