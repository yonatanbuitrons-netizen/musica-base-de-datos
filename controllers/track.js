const Track = require('../models/track')

const controller = {
  getTracks: function (req, res) {
    Track.find({}).exec()
      .then(tracks => res.status(200).json(tracks))
      .catch(err => res.status(500).send({ message: `Error: ${err}` }))
  },

  getTrack: function (req, res) {
    const trackId = req.params.id

    Track.findById(trackId).exec()
      .then(data => {
        if (!data) return res.status(404).send({ message: 'Track not found' })
        return res.status(200).json(data)
      })
      .catch(err => res.status(500).send({ message: `Internal error-> ${err}` }))
  },

  saveTrack: function (req, res) {
    const { title, artist, album, year } = req.body
    if (!title || !artist) {
      return res.status(400).send({ message: 'Data is not right' })
    }

    const track = new Track({ title, artist, album, year })

    track.save()
      .then(stored => res.status(200).json({ track: stored }))
      .catch(err => res.status(500).send({ message: `Error while saving: ${err}` }))
  },

  updateTrack: function (req, res) {
    Track.findByIdAndUpdate(req.params.id, req.body, { returnDocument: 'after' })
      .then(updated => {
        if (!updated) return res.status(404).send({ message: 'The document does not exist' })
        return res.status(200).send({ track: updated })
      })
      .catch(err => res.status(500).send({ message: `Error while updating: ${err}` }))
  },

  deleteTrack: function (req, res) {
    Track.findByIdAndDelete(req.params.id)
      .then(removed => {
        if (!removed) return res.status(404).send({ message: 'The track does not exist' })
        return res.status(200).send({ track: removed })
      })
      .catch(err => res.status(500).send({ message: `Error while deleting: ${err}` }))
  }
}

module.exports = controller