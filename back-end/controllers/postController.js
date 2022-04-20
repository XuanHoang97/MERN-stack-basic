const Post = require('../models/post');

// get all posts
exports.getAllPosts = async(req, res, next) => {
    try{
        const posts = await Post.find({}).populate('author');
        res.status(200).json({
            status: 'success',
            results: posts.length,
            data: {posts}
        });
    }catch(err){
        res.json(err)
    }
}

// create post
exports.createPost = async(req, res, next) => {
    try{
        const {userId} = req.user;
        const post = await Post.create({...req.body, author: userId});
        res.status(200).json({
            status: 'success',
            data: {post}
        });
    }catch(err){
        res.json(err)
    }
}

// update post
exports.updatePost = async(req, res, next) => {
    try{
        const {postId} = req.params;
        const post = await Post.findByIdAndUpdate(postId, {...req.body, runValidator: true});
        res.status(200).json({
            status: 'success',
            data: {post}
        });
    }catch(err){
        res.json(err)
    }
}

// delete post
exports.deletePost = async(req, res, next) => {
    try{
        const {postId} = req.params;
        await Post.findByIdAndUpdate(postId);
        res.status(200).json({
            status: 'success',
            message : 'Post deleted successfully'
        });
    }catch(err){
        res.json(err)
    }
}

