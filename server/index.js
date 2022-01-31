const express = require("express")

const app = express()

const home = require("./routes/home")

app.use("/", home)

const port = 3002

app.listen(port, () =>console.log(`server runing on ${port}`))