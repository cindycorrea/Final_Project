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

const newHF = async (req, res, next) => {
  const newBook = {
    title: req.body.title,
    author: req.body.author,
    published: req.body.published,
    pgCount: req.body.pgCount,
    synopsis: req.body.synopsis,
    genre: req.body.genre,
    audience: req.body.audience,
  };
  try {
    const createdHF = await HFiction.create(newBook);
    res.status(201).send(`${createdHF.title} added with _id: ${createdHF._id}`);
  } catch (error) {
    if (error.name === "ValidationError") {
      console.error("Validation error:", error.message);
      res.status(400).json({
        message: "Bad request. Validation failed.",
        error: error.message,
      });
    } else {
      console.error(error);
      res.status(500).json({ message: "Server Error" });
    }
  }
};

const updateHF = async (req, res, next) => {
  const hFId = req.params.id;
  const updatedBook = {
    $set: {
      title: req.body.title,
      author: req.body.author,
      published: req.body.published,
      pgCount: req.body.pgCount,
      synopsis: req.body.synopsis,
      genre: req.body.genre,
      audience: req.body.audience,
    },
  };
  try {
    const update = await HFiction.findOneAndUpdate({ _id: hFId }, updatedBook);
    res.status(204).send();
  } catch (error) {
    if (error.name === "ValidationError") {
      console.error("Validation error:", error.message);
      res.status(400).json({
        message: "Bad request. Validation failed.",
        error: error.message,
      });
    } else {
      console.error(error);
      res.status(500).json({ message: "Server Error" });
    }
  }
};

const deleteHF = async (req, res, next) => {
  const hFId = req.params.id;
  try {
    const remove = await HFiction.deleteOne({ _id: hFId });
    res.status(200).send(`The requested book has been removed.`);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  listHF,
  oneHF,
  newHF,
  updateHF,
  deleteHF,
};
