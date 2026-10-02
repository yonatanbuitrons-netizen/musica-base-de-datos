const { Router } = require('express')
const TrackController = require('../controllers/track')

const router = Router()

router.get('/tracks', TrackController.getTracks)
router.get('/:id', TrackController.getTrack)
router.post('/save-track', TrackController.saveTrack)
router.put('/edit-track/:id', TrackController.updateTrack)
router.delete('/delete-track/:id', TrackController.deleteTrack)

module.exports = router