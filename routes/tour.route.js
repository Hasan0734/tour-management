const express = require('express')
const router = express.Router();
const tourContoller = require('../controllers/tour.controller')



router.route("/").get(tourContoller.getTours).post(tourContoller.createTour);
router.route("/:id").get(tourContoller.getTourById).patch(tourContoller.updateTourById);



module.exports = router