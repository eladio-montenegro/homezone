const router = require("express").Router();
const kidController = require("../../controllers/kidController");

// Matches with "/api/kids"
router.route("/")
  .get(kidController.findAll)
  .post(kidController.create);

// Matches with "/api/kids/:id"
router
  .route("/:id")
  .get(kidController.findById)
  .put(kidController.update)
  .delete(kidController.remove);

module.exports = router;
