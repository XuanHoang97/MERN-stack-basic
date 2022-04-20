const express = require('express');

const {getAllPosts, createPost, updatePost, deletePost} = require('../controllers/postController');
const {verifyToken} = require('../middlewares/verifyToken');

const Router = express.Router();

Router.route('/').get(getAllPosts).post(verifyToken, createPost);

Router.route('/:postId').put(verifyToken, updatePost).delete(verifyToken, deletePost);

module.exports = Router;