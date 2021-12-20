const { Thought, User } = require('../models');

const thoughtController = {

    // get all thoughts
    getAllThoughts(req, res) {
        Thought.find({})
            .then(dbUserData => res.json(dbUserData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            })
    },

    // get thought by Id
    getThoughtById({ params }, res) {
        Thought.findOne({ _id: params.id })
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'No thought found with this id! '});
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },

    // add thought to user
    createThought({ body }, res) {
        console.log(body);
        Thought.create(body)
            .then(({ body }) => {
                return User.findOneAndUpdate(
                    { username: body.username },
                    // $push method to add thought's id to specific user to update
                    { $push: { thoughts: _id } },
                    // returning updated user with new thought included
                    { new: true }
                );
            })
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'No user found with this id!' });
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => res.json(err));
    },

    // update thought by its _id
    updateThought({ params, body }, res) {
        Thought.findOneAndUpdate({ _id: params.thoughtId }, body, { new: true, })
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'No thought found with this id! '});
                    return;
                }
                return User.findOneAndUpdate(
                    { _id: params.userId },
                    { $push: { thoughts: params.thoughtId } },
                    { new: true }
                );
            })
            .catch(err => res.status(400).json(err));
    },

    // create reaction
    createReaction({ params, body}, res) {
        console.log(body);
        Thought.findOneAndUpdate(
                { _id: params.thoughtId },
                { $push: { reactions: body } }, 
                { new: true }
            )
            .then(dbUserData =>  {
                if (!dbUserData) {
                    res.status(404).json({ message: 'No user found with this id! '});
                    return;
                }
                res.json(dbUserData);
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
            .then(dbUserData => res.json(dbUserData))
            .catch(err => res.json(err));
    },

    // remove thought
    deleteThought({ params }, res) {
        Thought.findOneAndDelete({ _id: params.id })
            .then(deletedThought => {
                if (!deletedThought) {
                    return res.status(404).json({ message: 'No thought with this id!' });
                }
                return User.findOneAndUpdate(
                    { username: deletedThought.username },
                    { $pull: { thoughts: params.id } },
                    { new: true }
                );
            })  
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'No user found with this id!' });
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => res.json(err));
    }
};

module.exports = thoughtController;