const { Thought, User } = require('../models');

const thoughtController = {

    // get all thoughts
    getAllThoughts(req, res) {
        Thought.find({})
            .populate({ path: 'reactions', select: '-__v' })
            .select('-__v')
            .sort({ _id: -1 })
            .then(dbThoughtData => res.json(dbThoughtData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            })
    },

    // get thought by Id
    getThoughtById({ params }, res) {
        Thought.findOne({ _id: params.id })
            .populate({ path: 'reactions', select: '-__v' })
            .select('-__v')
            .then(dbThoughtData => {
                if (!dbThoughtData) {
                    res.status(404).json({ message: 'No thought found with this id! '});
                    return;
                }
                res.json(dbThoughtData);
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },

    // add thought to user
    createThought({ body }, res) {
        Thought.create(body)
            .then(({ _id }) => {
                return User.findOneAndUpdate(
                    { username: body.username },
                    // $push method to add thought's id to specific user to update
                    { $push: { thoughts: _id } },
                    // returning updated user with new thought included
                    { new: true, runValidators: true }
                );
            })
            .then(dbThoughtData => {
                if (!dbThoughtData) {
                    res.status(404).json({ message: 'No user found with this id!' });
                    return;
                }
                res.json(dbThoughtData);
            })
            .catch(err => res.json(err));
    },

    // update thought by its _id
    updateThought({ params, body }, res) {
        Thought.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true })
            .then(updatedThought => {
                if (!updatedThought) {
                    res.status(404).json({ message: 'No thought found with this id! '});
                    return;
                }
                // return User.findOneAndUpdate(
                //     { _id: params.userId },
                //     { $push: { thoughts: params.thoughtId } },
                //     { new: true }
                // );
                res.json(dbThoughtData);
            })
            .catch(err => res.status(400).json(err));
    },

    // create reaction
    createReaction({ params, body}, res) {
        Thought.findOneAndUpdate(
                { _id: params.thoughtId },
                { $push: { reactions: body } }, 
                { new: true, runValidators: true }
            )
            .then(dbThoughtData =>  {
                if (!dbThoughtData) {
                    res.status(404).json({ message: 'No thought found with this id! '});
                    return;
                }
                res.json(dbThoughtData);
            })
            .catch(err => res.json(err));
    },

    // delete reaction
    removeReaction({ params }, res) {
        Thought.findOneAndUpdate(
                { _id: params.thoughtId },
                { $pull: { reactions: { reactionId: params.reactionId} } }, 
                { new: true }
            )
            .then(dbThoughtData => res.json(dbThoughtData))
            .catch(err => res.json(err));
    },

    // remove thought
    deleteThought({ params }, res) {
        Thought.findOneAndDelete({ _id: params.id })
            .then(deletedThought => {
                if (!deletedThought) {
                    return res.status(404).json({ message: 'No thought found with this id!' });
                }
                return User.findOneAndUpdate(
                    { username: params.username },
                    { $pull: { thoughts: params.id } },
                    { new: true }
                );
            })  
            .then(dbThoughtData => {
                if (!dbThoughtData) {
                    res.status(404).json({ message: 'No thought found with this id!' });
                    return;
                }
                res.json(dbThoughtData);
            })
            .catch(err => res.json(err));
    }
};

module.exports = thoughtController;