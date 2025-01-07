const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const bookmarkSchema = new mongoose.Schema({
    booktitle: {
        type: String,
        required: true
    },
    time: {
        type: Date,
        required: true
    },
    bibleversion: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    }
});

const highlightSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    }
});

const dataSchema = new mongoose.Schema(
    {
        highlights: [highlightSchema],
        bookmarks: [bookmarkSchema],
        user_id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User'
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model('bibleData', dataSchema);
