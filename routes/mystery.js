const router = require("express").Router();
const { requiresAuth } = require("express-openid-connect");
const mysteryController = require("../controllers/mystery")

router.get("/mystery", mysteryController.getAllMystery);

router.get("/mystery/:id", mysteryController.getOneMystery);

router.post("/mystery", requiresAuth(), mysteryController.createMystery);

router.put("/mystery/:id", requiresAuth(), mysteryController.updateMystery);

router.delete("/mystery/:id", requiresAuth(), mysteryController.deleteMystery);

module.exports = router;