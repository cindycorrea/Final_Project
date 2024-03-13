const router = require("express").Router();
const { requiresAuth } = require("express-openid-connect");
const mysteryController = require("../controllers/mystery")

router.get("/mystery", requiresAuth(), mysteryController.getAllMystery);

module.exports = router;