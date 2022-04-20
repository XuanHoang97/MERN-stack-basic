const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    content: {type: String, required: [true, 'post must have content'], trim: true},
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }
}, { timestamp: true });

const Post = mongoose.model('Post', postSchema);
module.exports = Post;