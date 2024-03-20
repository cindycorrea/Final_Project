const router = require("express").Router();
const { requiresAuth } = require("express-openid-connect");
const romanceController = require("../controllers/romance")

router.get("/romance", romanceController.getAllRomance);
router.get("/romance/:id", romanceController.oneRomance);
router.post("/romance", requiresAuth(), romanceController.newRomance);
router.put("/romance/:id", requiresAuth(), romanceController.updateRomance);
router.delete("/romance/:id", requiresAuth(), romanceController.deleteRomance);

module.exports = router;