const mongoose = require('mongoose')
const Schema = mongoose.Schema

const questionsSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true,
        minlength: 3
    },
    answers: [{
        type: String,
        required: true,
    }],
    correctAnswer: Number
})

const Question = mongoose.model('Question', questionsSchema)

module.exports = Question