const {Router} = require('express')
const router = Router()
const ctrlTravel = require('../contollers/travel')

router.get('/', ctrlTravel.travel)

module.exports = router
