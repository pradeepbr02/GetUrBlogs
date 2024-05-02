// Article.js

import mongoose from 'mongoose';

const ArticleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    content: {
        type: Array,
    },
    upvotes: {
        type: Number,
        default: 0
    },
    comments: {
        type: Array,
    },
    upvoteIds: {
        type: Array,
    }
});

const Articles = mongoose.model('Articles', ArticleSchema);

export default Articles;
