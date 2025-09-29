const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    userSchema: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
        trim: true,
        index: true // searching
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
        trim: true,
    },
    fullName: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
        index: true // searching
    },
    avatar: {
        type: String, // cloudinary url
        required: true,
    },
    coverImage: {
        type: String,
    },
    watchHistory: [
        {
            type:mongoose.Schema.Types.ObjectId,
            ref: 'Video'
        }
    ],
    password: {
        type: String,
        required: [true, 'Password is Required']
    },
    refreshToken: {
        type: String,
    }
}, { timeStamps: true }) // for created At and Updated At.


module.exports = mongoose.model('User', userSchema);