const express =  require ("express");
router= express.Router();
locationsRoutes = require("../controllers/locationsControllers");
router.get("/", locationsRoutes.locationsControllers);

module.exports = router;

