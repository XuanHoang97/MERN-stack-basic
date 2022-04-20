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
            // something else
        }
        if(bcrypt.compareSync(req.body.password, user.password)){
            const token = jwt.sign({userId: user._id}, process.env.APP_SECRET);
            res.status(200).json({
                status: 'success',
                data: { token, username: user.name }
            });
        }else{
            // something else
        }
    }catch(err){
        res.json(err);
    }
}
