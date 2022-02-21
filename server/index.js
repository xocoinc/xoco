const express = require("express")
const dotenv = require("dotenv")
const cors = require("cors")

dotenv.config()

//init app
const app = express()

//db
require("./config/db")

//pull in routes
const auth = require("./routes/auth")
const user = require("./routes/user")
const cart = require("./routes/cart")
const orders = require("./routes/order")
const products = require("./routes/product")

//middleware
app.use(cors())
app.use(express.json())
app.use("/api/products", products)
app.use("/api/orders", orders)
app.use("/api/auth", auth)
app.use("/api/users", user)
app.use("/api/", cart)

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`server runing on ${port}`))
