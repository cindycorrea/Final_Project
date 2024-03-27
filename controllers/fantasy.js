const mongoose = require("mongoose");
const mongoDB = require("../connectDB/connection");
const Fantasy = require("../schemas/fantasy");
const { response } = require("express");

const getAllFantasy = async (request, response) => {
  const fantasy = await Fantasy.find();
  response.send(fantasy);
};

const getFantasy = async (request, response) => {
  /*
  #swagger.description = Pull one fantasy novel by id
  */

  const bookID = request.params.id;

  try {
    const book = await Fantasy.findById(bookID);

    response.json(book);
  } catch (error) {
    console.error("Error:", error);
    response.status(500).json({ error: "Cannot fetch the book" });
  }
};

const newFantasy = async (request, response) => {
  /*
    #swagger.description = Create a new fantasy book entry
  */
  const newFantasy = new Fantasy({
    title: request.body.title,
    author: request.body.author,
    published: request.body.published,
    pgCount: request.body.pgCount,
    synopsis: request.body.synopsis,
    genre: request.body.genre,
    audience: request.body.audience,
  });

  try {
    const result = await newFantasy.save();

    console.log(`Inserted ${result.title} with an id of ${result.id}`);
    response.status(201).json(result._id);
  } catch (error) {
    console.error("Error: ", error);

    // Check if error is a Mongoose validation error
    if (error.name === "ValidationError" || error.name === "CastError") {
      // Handle validation error separately
      return response.status(400).json(error.message); // Respond with 400 Bad Request
    }

    response.status(500).json({ error: "Internal Server Error" });
  }
};

const updateFantasy = async (request, response) => {
  /*
    #swagger.description = Update a builder
  */

  try {
    const bookID = request.params.id;

    const filter = { _id: bookID };

    const update = {
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

    const result = await Fantasy.findOneAndUpdate(filter, update, {
      runValidators: true,
    });

    if (!result) {
      return response.status(404).json("Fantasy novel not found.");
    }

    response.status(204).send();
  } catch (error) {
    console.error("Here is the error: ", error);

    // Check if error is a Mongoose validation error
    if (error.name === "ValidationError" || error.name === "CastError") {
      // Handle validation error separately
      return response.status(400).json(error.message); // Respond with 400 Bad Request
    }

    response.status(500).json("Could not update the builder.");
  }
};

const deleteFantasy = async (request, response) => {
  /*
    #swagger.description = Delete a Fantasy novel
  */
  // Get the book id from the request
  const bookID = request.params.id;

  try {
    // Find the document and delete it
    const result = await Fantasy.findByIdAndDelete(bookID);

    if (!result) {
      // If result is null, document with given userID does not exist
      return response.status(404).json("Fantasy novel not found.");
    }

    console.log(`Fantasy ${result.title} has been deleted.`);
    response.status(200).json(`${result.title} has been deleted.`);
  } catch (error) {
    console.error("Error:", error);
    response.status(500).json({ error: "Cannot delete the book" });
  }
};


module.exports = { getAllFantasy, getFantasy, newFantasy, updateFantasy, deleteFantasy };
