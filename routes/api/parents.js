const router = require("express").Router();
const parentController = require("../../controllers/parentController");

// Matches with "/api/parents"
router.route("/")
  .get(parentController.findAll)
  .post(parentController.create);

// Matches with "/api/parents/:id"
router
  .route("/:id")
  .get(parentController.findById)
  .put(parentController.update)
  .delete(parentController.remove);

router
  .route("/code/:code")
  .get(parentController.findByCode);

module.exports = router;
