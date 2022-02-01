const express = require("express")
const router = express()

router.get("/register", (req, res) =>{
    res.send("Register")
})
router.get("/login", (req, res) =>{
    res.send("login page")
})
router.post("/register", (req, res) =>{
    const{username, email, password, confirmPassword}
    let error = []

    if(!username || !email || !password || !confirmPassword){
        error.push({
            message:"All fields must be field"
        })
    }
    if(password.length < 8){
        error.push({
            message:"password should not be less than 8 characters"
        })
    }
})

module.exports = router