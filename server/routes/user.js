const express = require("express")
const router = express()

router.get('/usertest', (req, res) =>{
    res.send('User test is succesfull')
})

router.post("/usertestpost", (req, res) =>{
    const username = req.body.username
    console.log(username)
})

module.exports = router