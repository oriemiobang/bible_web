const User = require('../model/userModel')
const jwt  = require("jsonwebtoken")
const UserModel = require('../model/userModel')

const createToken = (_id)=>{
    return jwt.sign({_id}, process.env.SECRET)

 }
const loginUser = async (req, res) => {
    const {email, password} = req.body;

    try{
        const user  = await UserModel.login(email, password)
        // create a token 
        const token  = createToken(user._id)
        res.status(200).json({email, token})

    } catch (error){
        res.status(400).json({error: error.message})

    }
}

const signupUser = async (req, res) => {

    const {email, password} = req.body

    try{

        const user  = await UserModel.signup(email, password)

        // create a token 
        const token  = createToken(user._id)
        res.status(200).json({email, token})

    } catch (error){
        res.status(400).json({error: error.message})

    }
   
}

module.exports = {loginUser, signupUser}