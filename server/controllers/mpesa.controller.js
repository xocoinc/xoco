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
  const passString = consumerSecret + comsumerKey + format
  const encodedPass = Buffer.from(passString).toString("base64")

  return encodedPass
}
exports.token = () => {
  let unirest = require("unirest")
  let req = unirest("GET", "https://sandbox.safaricom.co.ke/oauth/v1/generate")

  req.query({
    grant_type: "client_credentials",
  })

  req.headers({
    Authorization:
      "Basic SWVjN0huU25DN0w0enVpMG42ZmdMZUdXYVQ4Q09qcTJNNlkzOFZQVUtiSkVwMVJtMjAyMjAzMTcxMjMzMjE= ",
  })

  req.end(res => {
    if (res.error) throw new Error(res.error)
    console.log(res.body)
  })
}
exports.getMpesaPassword = async (req, res) => {
  res.status(200).json({ Pass: newPass() })
}
exports.stkPush = (req, res) => {
  res.send("cool")
}
