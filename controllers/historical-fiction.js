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

const oneHF = async (req, res, next) => {
  const hfId = req.params.id;
  try {
    const result = await HFiction.findById(hfId);
    res.send(result);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  listHF,
  oneHF,
};
