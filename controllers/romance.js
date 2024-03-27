const mongoose = require("mongoose");
const mongoDB = require("../connectDB/connection");
const Romance = require("../schemas/romance");
const { response } = require("express");

const getAllRomance = async (request, response, next) => {
  try {
    const romance = await Romance.find();
    response.json(romance);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const oneRomance = async (request, response) => {
  const romanceID = request.params.id;
  try {
    const result = await Romance.findById(romanceID);
    response.json(result);
  } catch (error) {
    console.log(error);
    response.status(500).json({ error: "Cannot fetch the book" });
  }
};

const newRomance = async (request, response, next) => {
  const newRomance = {
    title: request.body.title,
    author: request.body.author,
    published: request.body.published,
    pgCount: request.body.pgCount,
    synopsis: request.body.synopsis,
    genre: request.body.genre,
    audience: request.body.audience,
  };
  try {
    const result = await Romance.create(newRomance);
    response.status(201).send(`${result.title} added with _id: ${result._id}`);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const updateRomance = async (request, response, next) => {
  const romanceID = request.params.id;
  const updatedBook = {
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
    const update = await Romance.findOneAndUpdate(
      { _id: romanceID },
      updatedBook,
      {
        runValidators: true,
      }
    );
    if (!update) {
      return res.status(404).send("Requested book not found.");
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

const deleteRomance = async (request, response, next) => {
  const romanceID = request.params.id;

  try {
    const deletedBook = await Romance.findByIdAndDelete(romanceID);
    response
      .status(200)
      .send(`${deletedBook.title} deleted with _id: ${romanceID}`);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  getAllRomance,
  oneRomance,
  newRomance,
  updateRomance,
  deleteRomance,
};
