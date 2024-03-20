const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { auth, requiresAuth } = require("express-openid-connect");

const dotenv = require("dotenv").config();
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger-output.json");

const app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// Auth0 configurations
const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.CLIENT_SECRET,
  //baseURL: "http://localhost:3000",
  baseURL: "https://final-project-21h7.onrender.com",
  clientID: process.env.CLIENT_ID,
  issuerBaseURL: "https://dev-rvj64s07evwos7pn.us.auth0.com",
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// req.isAuthenticated is provided from the auth router
app.get("/", (req, res) => {
  res.send(req.oidc.isAuthenticated() ? "Logged in" : "Logged out");
});

app.get("/profile", requiresAuth(), (req, res) => {
  res.send(JSON.stringify(req.oidc.user));
});

// Routes for each collection
app.use("/", require("./routes/fantasy"));
app.use("/", require("./routes/mystery"));
app.use("/", require("./routes/historical-fiction"));
app.use("/", require("./routes/romance"));

// Swagger route for API documentation
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
