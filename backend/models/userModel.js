const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        minlength: 4
    },
    password: {
        type: String,
        required: true,
        max: 1024,
        min: 6
    }
})

const User = mongoose.model('User', userSchema)

module.exports = User