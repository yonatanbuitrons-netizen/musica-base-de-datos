const express = require('express')
const track_routes = require('./routes/track')

const app = express()

// settings
app.set('port', process.env.PORT || 3000)

// middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// routes
app.use('/api/track', track_routes)

module.exports = app