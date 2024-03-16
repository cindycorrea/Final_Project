const mongoose = require("mongoose");

const historical_fictionSchema = new mongoose.Schema(
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
  { collection: "historical_fiction" }
);

const HFiction = mongoose.model("HFiction", historical_fictionSchema);

module.exports = HFiction;
