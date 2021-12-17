const { Schema, model } = require('mongoose');

const ThoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now
        // getter method to format timestamp on query
    },
    username: {
        type: String,
        required: true
    },
    reactions: {
        // array of nested documents created in reactionSchema
    }
});

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;
