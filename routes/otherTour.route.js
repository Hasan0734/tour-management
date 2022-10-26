const express = require("express");
const router = express.Router();
const otherTourController = require("../controllers/otherTour.controller");

router.route("/tranding").get(otherTourController.getTrandingTour);
router.route("/cheapest").get(otherTourController.getTrandingTour);

module.exports = router;
