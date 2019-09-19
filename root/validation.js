const Joi = require('@hapi/joi')

const questionValidation = data => {
    const schema = Joi.object({
        title: Joi.string().required(),
        answers: Joi.array().items(Joi.string().required(), Joi.string().required(), Joi.string().required(), Joi.string().required()),
        correctAnswer: Joi.number().required()
    })
    return schema.validate(data)
}
const loginValidation = data => {
    const schema = Joi.object({
        username: Joi.string().min(4).required(),
        password: Joi.string().min(6).required()
    })
    return schema.validate(data)
}

module.exports.questionValidation = questionValidation
module.exports.loginValidation = loginValidation