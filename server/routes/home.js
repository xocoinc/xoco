const express = require("express")
const router = express()

router.get("/", (req, res) =>{
    res.send("The Home page")
})

module.exports = router