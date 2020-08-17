const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        minlength: 3,
        maxlength: 30,
        unique: true
    },
    email: {
        type: String,
        minlength: 6,
        maxlength: 150,
        unique: true,
        required: true
    },
    movie: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 500
    },
    emailValidated: {
        type: Boolean,
        default: false
    }
})

const MovieModel = mongoose.model('movie', MovieSchema);

module.exports = MovieModel;