const router = require('express').Router();

const { 
    getAllThoughts, 
    getThoughtById, 
    createThought, 
    updateThought, 
    deleteThought,
    createReaction, 
    removeReaction 
} = require('../../controllers/thought-controller');

// GET all and POST at /api/thoughts
router
    .route('/')
    .get(getAllThoughts)
    .post(createThought);

// GET one, PUT to update, and DELETE by Id
router
    .route('/:id')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought);

// /api/thoughts/:thoughtId/reactions/:reactionId
// PUT route to create reaction because we're updating the existing thought resource
router
    .route('/:thoughtId/reactions')
    .post(createReaction);

router
    .route('/:thoughtId/reactions/:reactionId')
    .delete(removeReaction);


module.exports = router;