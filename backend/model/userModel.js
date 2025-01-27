const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs'); // Now using bcryptjs instead of bcrypt

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    }
});

// Static login method
UserSchema.statics.login = async function (email, password) {
    if (!email || !password) {
        throw new Error('All fields must be filled');
    }

    const user = await this.findOne({ email });
    if (!user) {
        throw new Error('Incorrect email');
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
        throw new Error('Incorrect password');
    }

    return user;
};

// Static signup method
UserSchema.statics.signup = async function (email, password) {
    if (!email || !password) {
        throw new Error('Please provide an email and password');
    }

    if (!validator.isEmail(email)) {
        throw new Error('Invalid email format');
    }

    if (!validator.isStrongPassword(password)) {
        throw new Error('Password must be strong (include uppercase, lowercase, numbers, and symbols)');
    }

    const exist = await this.findOne({ email });
    if (exist) {
        throw new Error('Email already exists');
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await this.create({ email, password: hashedPassword });

    return user;
};

module.exports = mongoose.model('User', UserSchema);
