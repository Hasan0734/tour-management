const express = require('express')
const router = express.Router();
const tourContoller = require('../controllers/tour.controller')



router.route("/tours").get(tourContoller.getTours).post(tourContoller.createTour);
router.route("/tours/:id").get(tourContoller.getTourById);
router.route("/tour/tranding").get(tourContoller.getTrandingTour);
router.route("/tour/cheapest").get(tourContoller.getTrandingTour);
router.route("/tour/:id").patch(tourContoller.updateTourById);




module.exports = router