const express =  require ("express");
const { get } = require("express/lib/response");
router= express.Router();
locationsRoutes = require("../controllers/locationsControllers");





router.get("/", locationsRoutes.locationsControllers);




module.exports = router;

