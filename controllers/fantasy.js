const mongoose = require("mongoose");
const mongoDB = require("../connectDB/connection");
const Fantasy = require("../schemas/fantasy");

const test = async (request, response) => {
  console.log("This is the test.");
  response.json("This is the second test function.");
};

const getAllFantasy = async (request, response) => {
  const fantasy = await Fantasy.find();
  response.json(fantasy);
};

module.exports = { test, getAllFantasy };
