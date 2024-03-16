const routes = require("express").Router();
const hfController = require("../controllers/historical-fiction");
const { requiresAuth } = require("express-openid-connect");

routes.get("/historical-fiction", hfController.listHF);
routes.get("/historical-fiction/:id", hfController.oneHF);

routes.post("/historical-fiction", hfController.newHF); // removed for testing: requiresAuth(),

routes.put("/historical-fiction/:id", hfController.updateHF); // removed for testing: requiresAuth(),

// routes.delete("/historical-fiction/:id", hfController.deleteHF);// removed for testing: requiresAuth(),

module.exports = routes;
