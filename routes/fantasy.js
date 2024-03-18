const router = require("express").Router();
const { requiresAuth } = require("express-openid-connect");
const fantasyController = require("../controllers/fantasy")

router.get("/fantasy", fantasyController.getAllFantasy);
router.get("/fantasy/:id", fantasyController.getFantasy);
router.post("/fantasy", requiresAuth(), fantasyController.newFantasy);
router.put("/fantasy/:id", requiresAuth(), fantasyController.updateFantasy);
router.delete("/fantasy/:id", requiresAuth(), fantasyController.deleteFantasy)

module.exports = router;