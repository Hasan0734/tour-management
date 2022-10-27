const express = require("express");
const app = express();
const cors = require("cors");

// middlewares
app.use(express.json());
app.use(cors());

// routes

const tourRoute = require("./routes/tour.route");

app.use("/api/v1", tourRoute);


module.exports = app;
