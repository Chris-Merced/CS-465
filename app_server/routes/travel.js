const {Router} = require('express')
const router = Router()
const ctrlTravel = require('../controllers/travel')

router.get('/', ctrlTravel.travel)

module.exports = router
