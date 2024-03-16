const mongoose = require("mongoose");
const connectDB = require("../connectDB/connection");
const HFiction = require("../schemas/historical-fiction");

const listHF = async (req, res, next) => {
  try {
    const hFBooks = await HFiction.find();
    res.send(hFBooks);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  listHF,
};
