const express = require("express")
const dotenv = require("dotenv")

dotenv.config()

//init app
const app = express()

//db
require("./config/db")

//pull in routes
const auth = require("./routes/auth")
const user = require("./routes/user")
const cart = require("./routes/cart")

//middleware
app.use(express.json())
app.use("/api/auth", auth)
app.use("/api/user", user)
app.use("/api/", cart)

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`server runing on ${port}`))
