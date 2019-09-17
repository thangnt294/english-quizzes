const joi = require('@hapi/joi')

const questionValidation = data => {
    const schema = {
        title: joi.string().required(),
        answers: joi.array().required(),
        correctAnswer: joi.number().required()
    }
    return joi.validate(data, schema)
}
const loginValidation = data => {
    const schema = {
        username: joi.string().min(4).required(),
        password: joi.string().min(6).required()
    }
    return joi.validate(data, schema)
}

module.exports.questionValidation = questionValidation
module.exports.loginValidation = loginValidation