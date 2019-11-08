const router = require("express").Router();
const bookRoutes = require("./books");
const parentRoutes = require("./parents");
const kidRoutes = require("./kids");

// routes
router.use("/books", bookRoutes);
router.use("/parents", parentRoutes);
router.use("/kids", kidRoutes);

module.exports = router;
