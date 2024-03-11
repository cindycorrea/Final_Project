const mongoose = require("mongoose");
// const mongoDB = require("../mongoDB/connection");
// const Fantasy = require("../mongoose/fantasy");

const test = async (request, response) => {
    console.log("This is the test.")
    response.json('This is the second test.')
}

module.exports = { test }
