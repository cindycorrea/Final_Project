const mongoose = require("mongoose");
const mongoDB = require("../connectDB/connection");
const Mystery = require("../schemas/mystery");

const getAllMystery = async (request, response) => {
    const mystery = await Mystery.find();
    response.json(mystery);
  };

const getOneMystery = async(request, response) => {
  const id = request.params.id;
  try {
  const result = await Mystery.findById(id);
  response.send(result);
  } catch (error) {
    console.error("Error:", error);
    response.status(500).json('Must be a valid id');
  }
}

const createMystery = async(request, response) => {

}

const updateMystery = async(request, response) => {

}

const deleteMystery = async(request, respone) => {

}
module.exports = { getAllMystery, getOneMystery, createMystery, updateMystery, deleteMystery}