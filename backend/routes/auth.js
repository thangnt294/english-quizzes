const router = require('express').Router()
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { loginValidation } = require('../validation')
let User = require('../models/userModel')

router.post('/login', async (req, res) => {
    // Validate before logging in
    const { error } = loginValidation(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    // Check if the username exist
    const user = await User.findOne({ username: req.body.username })
    if (!user) return res.status(400).send('Invalid username or password')

    // Check if password is correct
    const validPass = await bcryptjs.compare(req.body.password, user.password)
    if (!validPass) return res.status(400).send('Invalid username or password')

    // Create and assign a token
    const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET)
    res.header('auth-token', token).status(200).send(token)
})

// Adding an admin
// router.post('/register', async (req, res) => {
//     // Validate before registering
//     const { error } = loginValidation(req.body)
//     if (error) return res.status(400).send(error.details[0].message)

//     // // Check if the username exist
//     const user = await User.findOne({ username: req.body.username })
//     if (user) return res.status(400).send('Invalid username or password')

//     const username = req.body.username
//     const salt = await bcryptjs.genSalt(10)
//     const hashedPassword = await bcryptjs.hash(req.body.password, salt)

//     const newUser = new User({
//         username,
//         password: hashedPassword
//     })
//     try {
//         const savedUser = await newUser.save()
//         res.send(savedUser)
//     } catch (err) {
//         res.status(400).send('error saving user')
//     }
// })

module.exports = router