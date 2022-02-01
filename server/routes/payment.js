const express = require('express')
const mpesa = require('mpesa-node')
const router = express.Router()

//payment route
router.post("/payments", (req, res) =>{
    const mpesaApi = new mpesa({
        consumerKey:'',
        consumerSecret:'',
        enviroment:'sandbox',
        shortCode:'',
        initiatorName:'',
    })
})