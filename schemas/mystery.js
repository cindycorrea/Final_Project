const mongoose = require("mongoose");

const mysterySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  published: {
    type: Number,
    required: true,
  },
  pgCount: {
    type: Number,
    required: true,
  },
  synopsis: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  audience: {
    type: String,
    required: true,
  },
});

const Mystery = mongoose.model("Fantasy", mysterySchema);

module.exports = Mystery;
