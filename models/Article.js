const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    published: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Article', ArticleSchema);
