const mongoose = require("mongoose");
const mongoDB = require("../connectDB/connection");
const Mystery = require("../schemas/mystery");

const getAllMystery = async (request, response) => {
  const mystery = await Mystery.find();
  response.json(mystery);
};

const getOneMystery = async (request, response) => {
  const id = request.params.id;
  try {
    const result = await Mystery.findById(id);
    response.send(result);
  } catch (error) {
    console.error("Error:", error);
    response.status(500).json("Must be a valid id");
  }
};

const createMystery = async (request, response) => {
  const book = new Mystery({
    title: request.body.title,
    author: request.body.author,
    published: request.body.published,
    pgCount: request.body.pgCount,
    synopsis: request.body.synopsis,
    genre: request.body.genre,
    audience: request.body.audience,
  });
  try {
    const result = await book.save();
    response
      .status(201)
      .json(`${result.title} has been added to the Mystery genre.`);
  } catch (error) {
    console.error("Error:", error);
    response.status(500).json("Please try again.");
  }
};

const updateMystery = async (request, response) => {
  const id = request.params.id;
  const book = {
    $set: {
      title: request.body.title,
      author: request.body.author,
      published: request.body.published,
      pgCount: request.body.pgCount,
      synopsis: request.body.synopsis,
      genre: request.body.genre,
      audience: request.body.audience,
    },
  };
  try {
    const result = await Mystery.findOneAndUpdate({ _id: id }, book, {
      runValidators: true,
    });
    if (!result) {
      return response.status(404).send("Requested book not found.");
    }
    response.status(204).send();
  } catch (error) {
    if (error.name === "ValidationError") {
      console.error("Validation error:", error.message);
      res.status(400).json({
        message: "Bad request. Validation failed.",
        error: error.message,
      });
    } else {
      console.error(error);
      res.status(500).json({ message: "Couldn't update the book." });
    }
  }
};

const deleteMystery = async (request, response) => {
  const id = request.params.id;

  try {
    const result = await Mystery.findByIdAndDelete(id);
    response.status(201).json(`${result.title} has been deleted.`);
  } catch (error) {
    console.error("Error:", error);
    response.status(500).json("Must be a valid id");
  }
};
module.exports = {
  getAllMystery,
  getOneMystery,
  createMystery,
  updateMystery,
  deleteMystery,
};
