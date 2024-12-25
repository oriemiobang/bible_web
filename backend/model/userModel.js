const mongoose = require('mongoose');
const validator = require('validator')
const bcrypt = require('bcrypt')

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})


// static login 
UserSchema.statics.login = async function(email, password) {
    if(!email || !password){
        throw new Error('All fields must be filled required')
    }
    const user = await this.findOne({email})
    if(!user){
        throw new Error('Incorrect email')
    }
    const match = await bcrypt.compare(password, user.password)
    if(!match){
        throw new Error('Incorrect password')
    }
    return user

}

// static sign up method 
UserSchema.statics.signup = async function(email, password){

    if(!email || !password) {
        throw new Error('Please provide email and password')
    }

    if(!validator.isEmail(email)){
        throw new Error('Email is not valid')
    }

    if(!validator.isStrongPassword(password)){
        throw new Error('Password is not strong enough')
    }


    const exist  = await this.findOne({email})
    if (exist) {
        throw new Error('Email already exists')
    }
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)
    const user = await this.create({email, password: hashedPassword})
     
    return user;
}

module.exports = mongoose.model('User', UserSchema)