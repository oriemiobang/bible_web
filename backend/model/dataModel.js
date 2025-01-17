const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const bookmarkSchema = new mongoose.Schema({
    // { verse, version, book, formattedDate };
    book: {
        type: String,
        required: true
    },
    formattedDate: {
        type: String,
        required: true
    },
    version: {
        type: String,
        required: true
    },
    verse: {
        type: String,
        required: true
    }
});

const highlightSchema = new mongoose.Schema({
    verseId: {
        type: String,
        required: true
    },
    color: {
        type: Number,
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
