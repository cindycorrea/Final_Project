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

const oneRomance = async (request, response, next) => {
  const romanceID = request.params.id;
  try {
    const result = await Romance.findById(romanceID);
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
    await Romance.findOneAndUpdate({ _id: romanceID }, updatedBook);
    response.status(204);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const deleteRomance = async (request, response, next) => {
    const romanceID = request.params.id;
    
    try {
      const deletedBook = await Romance.findByIdAndDelete(romanceID);
      response.status(200).send(`${deletedBook.title} deleted with _id: ${romanceID}`);
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