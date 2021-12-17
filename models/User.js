const { Schema, model } = require('mongoose');

const UserSchema = new Schema (
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+\@.+\..+/]
        },
        thoughts: [
            {
                // _id values referencing Thought model
                type: Schema.Types.ObjectId,
                ref: 'Thought'
            }
        ],
        friends: [
            {
                // _id values referencing User model (self-referencing)
                type: Schema.ObjectId,
                required: true
            }
        ]
    },
    {
        // tells Schema to use virtuals
        toJSON: {
            virtuals: true,
        },
        id: false
    }
);

// get total count of friends on User's friends array field
UserSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});


const User = model('User', UserSchema);

module.exports = User;