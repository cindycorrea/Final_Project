const mongoose = require("mongoose");
const mongoDB = require("../connectDB/connection");
const romance = require("../schemas/romance");
const { response } = require("express");

const getAllRomance = async (response, next) => {
  try {
    const romance = await romance.find();
    response.json(romance);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const oneRomance = async (request, response, next) => {
  const romanceID = request.params.id;
  try {
    const result = await romance.findById(romanceID);
    response.send(result);
  } catch (error) {
    console.log(error);
    next(error);
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
    const result = await romance.create(newRomance);
    res.status(201).send(`${result.title} added with _id: ${result._id}`);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const updateRomance = async (request, response, next) => {
  const romanceID = request.params.id;
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
    await romance.findOneAndUpdate({ _id: romanceID }, updatedBook);
    response.status(204);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const deleteRomance = async (request, response, next) => {
    const romanceID = request.params.id;
    try {
      const deletedBook = await HFiction.deleteOne({ _id: romanceID });
      res.status(200).send(`${deletedBook.title} deleted with _id: ${deletedBook._id}`);
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