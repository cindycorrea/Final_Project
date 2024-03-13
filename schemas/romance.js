const mongoose = require("mongoose");

const romanceSchema = new mongoose.Schema(
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
  },
  { collection: "romance" }
);

const Romance = mongoose.model("Romance", romanceSchema);

module.exports = Romance;
