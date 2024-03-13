const mongoose = require("mongoose");
const mongoDB = require("../connectDB/connection");
const Mystery = require("../schemas/mystery");

const getAllMystery = async (request, response) => {
    const mystery = await Mystery.find();
    response.json(mystery);
  };

module.exports = { getAllMystery }