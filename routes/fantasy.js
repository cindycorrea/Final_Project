const router = require("express").Router();
const { requiresAuth } = require("express-openid-connect");
const fantasyController = require("../controllers/fantasy")

router.get("/fantasy", fantasyController.getAllFantasy);

module.exports = router;