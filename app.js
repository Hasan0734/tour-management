const express = require("express");
const app = express();
const cors = require("cors");

// middlewares
app.use(express.json());
app.use(cors());

// routes

const tourRoute = require("./routes/tour.route");
const otherTourRoute = require('./routes/otherTour.route')

app.use("/api/v1/tours", tourRoute);
app.use("/api/v1/tour", otherTourRoute);

module.exports = app;
