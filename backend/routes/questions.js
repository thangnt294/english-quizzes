const router = require('express').Router()
const { questionValidation } = require('../validation')
let Question = require('../models/questionsModel')

// Get all questions
router.get('/', (req, res) => {
    Question.find()
        .then(questions => res.json(questions))
        .catch(err => res.status(400).json('Error: ' + err))
})

// Get 10 random questions
router.get('/10random', (req, res) => {
    Question.find()
        .then(questions => {
            let questionsBank = []
            let indexBank = []
            while (indexBank.length < 10) {
                let hasOne = false
                const randomNumber = Math.floor(Math.random() * questions.length)
                for (let x of indexBank) {
                    if (randomNumber === x) {
                        hasOne = true
                    }
                }
                if (!hasOne) {
                    indexBank.push(randomNumber)
                }
            }
            indexBank.forEach(index => {
                questionsBank.push(questions[index])
            })
            res.json(questionsBank)
        })
        .catch(err => res.status(400).json('Error: ' + err))
})

// Adding a new question
router.post('/add', (req, res) => {
    //Validate before adding
    const { error } = questionValidation(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    const title = req.body.title
    const answers = req.body.answers
    const correctAnswer = req.body.correctAnswer

    // Create new question
    const newQuestion = new Question({
        title,
        answers,
        correctAnswer
    })

    // Updating new question to the database
    newQuestion.save()
        .then(() => res.json('New question added successfully!'))
        .catch(err => res.status(400).json('Error: ' + err))
})

// Update question
router.put('/update/:id', (req, res) => {
    const title = req.body.title
    const answers = req.body.answers
    const correctAnswer = req.body.correctAnswer

    Question.findByIdAndUpdate(req.params.id, {
        $set: {
            title,
            answers,
            correctAnswer
        }
    })
        .then(() => res.json('Question updated'))
        .catch(err => res.status(400).json('Error: ' + err))
})

// Delete question
router.delete('/delete/:id', (req, res) => {
    Question.findByIdAndDelete(req.params.id)
        .then(() => res.json('Question deleted'))
        .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router