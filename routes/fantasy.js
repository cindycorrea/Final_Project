const router = require("express").Router();
const { requiresAuth } = require("express-openid-connect");
const fantasyController = require("../controllers/fantasy")

router.get("/fantasy", requiresAuth(), fantasyController.test);

module.exports = router;