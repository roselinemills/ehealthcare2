const express =require('express')
const router =express.Router()

const User =require('../controller/user')
const authentication = require('../policies/authentication')
// const wallet =require("../controller/walletInfo")

router.post("/signup",authentication.register,User.register)
router.post('/login',User.login)
router.get("/wallet",wallet.info)

module.exports =router