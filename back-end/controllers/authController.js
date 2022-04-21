const User = require('../models/User');
require('dotenv').config();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

exports.register = async(req, res) => {
    try{
        const user = await User.create(req.body);
        const token = jwt.sign(user._id, process.env.APP_SECRET);
        res.status(200).json({
            status: 'success',
            data: { token, username: user.name }
        });
    }catch(err){
        res.json(err);
    }
};

exports.login = async(req, res) => {
    try{
        const user = await User.findOne({ email: req.body.email });
        if(!user){
            const err = new Error('Email is not correct');
            err.status = 400;
            return next(error);
        }
        if(bcrypt.compareSync(req.body.password, user.password)){
            const token = jwt.sign({userId: user._id}, process.env.APP_SECRET);
            res.status(200).json({
                status: 'success',
                data: { token, username: user.name }
            });
        }else{
            const err = new Error('Password is not correct');
            err.status = 400;
            return next(error);
        }
    }catch(err){
        res.json(err);
    }
}

// get current user
exports.getCurrentUser = async(req, res) => {
    try{
        const data = {user: null}
        if(req.user){
            const user = await User.findOne({_id: req.user.userId});
            data.user = {userName: user.name, email: user.email};
        }
        res.status(200).json({
            status: 'success',
            data: data
        });
    }catch(err){
        res.json(err);
    }
}
