const mongoose = require("mongoose")
const dotenv = require("dotenv")

dotenv.config()
//connect to db
const uri =
  "mongodb+srv://tepela:ZAS0706x@cluster0.ns3va.mongodb.net/xoco?retryWrites=true&w=majority"
mongoose
  .connect(uri, { useNewUrlParser: false })
  .then(() => console.log("connected to mongo db"))
  .catch(err => console.error(err))
