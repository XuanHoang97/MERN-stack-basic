const jwt = require('jsonwebtoken');

exports.checkCurrentUser = (req, res, next) => {
    // access Authorization from req headers
    const Authorization = req.header('authorization');
    if(!Authorization){
        req.user = null;
        next();
    }else{
        // get token
        const token = Authorization.replace('Bearer ', '');
        
        // verify token
        try{
            const {userId} = jwt.verify(token, process.env.APP_SECRET);
            req.user = {userId};
            next();
        }catch(err){
            req.user = null;
            next();
        }
    }
}