const mongoose = require("mongoose");

const fantasySchema = new mongoose.Schema({
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
}, { collection: 'fantasy' });

const Fantasy = mongoose.model("Fantasy", fantasySchema);

module.exports = Fantasy;
