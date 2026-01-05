const mongoose = require("mongoose");

const ratingSchema = mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    grade: {
      type: Number,
      required: true,
      min: 0,
      max: 5,
    },
  },
  { _id: false } // prevents creating an _id for each rating
);

const bookSchema = mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    author: {
      type: String,
      required: true,
      trim: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    genre: {
      type: String,
      required: true,
    },
    ratings: {
      type: [ratingSchema],
      default: [],
    },
    averageRating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    },
  },
  {
    timestamps: true, // adds createdAt & updatedAt
  }
);

module.exports = mongoose.model("Book", bookSchema);
