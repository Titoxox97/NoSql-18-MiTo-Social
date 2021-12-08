const router = require("express").Router();
const thoughtControllers = require("../../controllers/thought_controller");

const {
  getAllThoughts,
  getThoughtById,
  createThought,
  updatethought,
  deleteThought,
  createReaction,
  deleteReaction,
} = thoughtControllers;

router.route("/").get(getAllThoughts).post(createThought);

router
  .route("/:id")
  .get(getThoughtById)
  .put(updatethought)
  .delete(deleteThought);

router.route("/:thoughtId/reactions/:reactionId").delete(deleteReaction);

module.exports = router;
