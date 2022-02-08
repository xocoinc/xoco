const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()

//connect to db
const uri = process.env.MONGO_URI
mongoose
.connect(uri,{ useNewUrlParser: false })
.then(() => console.log('connected to mongo db'))
.catch((err) => console.error(err))
