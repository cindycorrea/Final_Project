const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'A Little Library',
    description: 'A small database for a little library.'
  },
  // host: "localhost:3000",
  host: "final-project-21h7.onrender.com",
  // schemes: ['http']
  schemes: ['https']
};

const outputFile = './swagger-output.json';
// *** Add routes as they are built ***
const routes = ['./routes/fantasy.js'];

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

swaggerAutogen(outputFile, routes, doc);