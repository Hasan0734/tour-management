const mongoose = require("mongoose");

const tourSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a name for this tour."],
      trim: true, //remove space after and before
      unique: [true, "Name must be unique"],
      minLength: [3, "Name must be at least 3 charcters."],
      maxLength: [150, "Name is  too large"],
    },
    place_from: {
      type: String,
      required: [true, "Please provide a starting place tour."],
      trim: true,
      minLength: [3, "Name must be at least 3 charcters."],
    },
    place_to: {
      type: String,
      required: [true, "Please provide place to location ."],
      trim: true,
      minLength: [3, "Name must be at least 3 charcters."],
    },
    duration_day: {
      type: String,
      required: [true, "Duration days is required"],
      trim: true,
    },
    duration_night: {
      type: String,
      required: [true, "Duration nights is required"],
      trim: true,
    },
    price: {
      type: Number,
      required: true,
      min: [0, "Price can't be negative"],
      trim: true,
    },
    image: {
      type: String,
      required: [true, "Image link required"],
      trim: true,
    },
    viwed: {
      type: Number,
      enum: [0],
      default: 0,
    },
  },
  { timestamps: true }
);

const Tour = mongoose.model("Tour", tourSchema);

module.exports = Tour;
