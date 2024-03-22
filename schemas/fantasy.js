const mongoose = require("mongoose");

const fantasySchema = new mongoose.Schema(
  {
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
      min: [1000],
      max: [2100],
      maxlength: [4],
    },
    pgCount: {
      type: Number,
      required: true,
      min: [1],
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
  },
  { collection: "fantasy" },
  { versionKey: false }
);

const Fantasy = mongoose.model("Fantasy", fantasySchema);

module.exports = Fantasy;
