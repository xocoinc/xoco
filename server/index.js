const express = require("express")

//init app
const app = express()

//pull in routes
const user = require("./routes/user")

//middleware
app.use("/user", user)


const port = 3002
app.listen(port, () =>console.log(`server runing on ${port}`))