const express = require('express')
const router = express.Router();
const tourPackage = require('../controllers/tour.controller')



router
    .route('/')
    .get(tourPackage.getTourPackage)
    .post(tourPackage.createTourPackage)



module.exports = router