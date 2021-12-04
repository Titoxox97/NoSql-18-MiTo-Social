const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updatethought,
    deleteThought,
    createReaction,
    deleteReaction
}

router
.route('/')
.get(getAllThoughts)
.post(createThought)

router
.route('/:id')
.get(getThoughtById)
.put(updatethought)
.delete(deleteThought);

router
.route('/:thoughtId/reactions/:reactionId')
.delete(deleteReaction);

module.exports = router;