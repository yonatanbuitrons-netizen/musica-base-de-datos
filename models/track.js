let mongoose = require('mongoose')
let Schema = mongoose.Schema

let TrackSchema = Schema ({
  name: String,
  episodes: Number,
  cast: [{name: String, role: String}]
})

module.exports = mongoose.model('track',TrackSchema, 'track')

