const routes = require("express").Router();
const hfController = require("../controllers/historical-fiction");
const { requiresAuth } = require("express-openid-connect");

routes.get("/historical-fiction", hfController.listHF);
routes.get("/historical-fiction/:id", hfController.oneHF);

routes.post("/historical-fiction", requiresAuth(), hfController.newHF);

// routes.put("/historical-fiction/:id", requiresAuth(), hfController.updateHF);

// routes.delete("/historical-fiction/:id", requiresAuth(), hfController.deleteHF);

module.exports = routes;
