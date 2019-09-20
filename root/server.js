const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const path = require('path')
require('dotenv').config()

const app = express()

// Middleware
app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname, 'client', 'build')))

// Routing
app.use('/questions', require('./routes/questions'))
app.use('/', require('./routes/auth'))

// Connect To MongoDB
mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
mongoose.connection.on('error', console.error.bind(console, 'connection error:'))
mongoose.connection.once('open', () => console.log('Connected to the database successfully'))
mongoose.set('useFindAndModify', false)

// Running Server
const PORT = process.env.PORT || 5000
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
})
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))