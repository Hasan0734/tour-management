const express = require("express");
const app = express();
const cors = require("cors");

// middlewares
app.use(express.json());
app.use(cors());

// routes
const productRoute = require("./routes/product.route");

const tourRoute = require("./routes/tour.route");

app.use("/api/v1/product", productRoute);
app.use("/api/v1/tour", tourRoute);

module.exports = app;
