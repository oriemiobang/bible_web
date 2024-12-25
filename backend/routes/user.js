const express  = require('express')

const  {loginUser, signupUser} = require('../controller/userController')


const router = express.Router()

// login route 
router.post('/login', loginUser)

// sign route

router.post('/signup',signupUser )

module.exports = router