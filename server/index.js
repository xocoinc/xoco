const express = require("express")
const dotenv = require("dotenv")
const cors = require("cors")
const path = require("path")
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
const mpesaRouter = require("./routes/mpesa")

//production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/build")))

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html")),
  )
} else {
  app.get("/", (req, res) => {
    res.send("API is running....")
  })
}
//middleware
app.use(cors())
app.use(express.json())
app.use("/api/", mpesaRouter)
app.use("/api/products", products)
app.use("/api/orders", orders)
app.use("/api/auth", auth)
app.use("/api/users", user)
app.use("/api/", cart)

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`server runing on ${port}`))
