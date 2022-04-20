const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    name: { type: String, unique: true, trim: true, required: [true, 'name must be required']},
    email: { type: String, unique: true, trim: true, required: [true, 'email must be required']},
    password: { type: String, trim : true, required: [true, 'password must be required'], minlength: [6, 'password must be at least 6 characters']},
}, { timestamps: true });

userSchema.pre('save', function(next) {
    let user = this;
    bcrypt.hash(user.password, 10, function(error, hash) {
        if(error){
            return next(error);
        }else{
            user.password = hash;
            next();
        }
    });
});

const User = mongoose.model('User', userSchema);

module.exports = User;
