const router = require("express").Router();
const parentRoutes = require("./parents");
const kidRoutes = require("./kids");

// routes

router.use("/parents", parentRoutes);
router.use("/kids", kidRoutes);

module.exports = router;
