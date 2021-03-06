const jwt = require('jsonwebtoken');

exports.verifyToken = (req, res, next) => {
    // Access Authorization from req headers
    const Authorization = req.header('authorization');

    if(!Authorization){
        // 401: Unauthorized
        const err = new Error('Unauthorized');
        err.status = 401;
        return next(error);
    }

    // get token
    const token = Authorization.replace('Bearer ', '');

    // verify token
    const {userId} = jwt.verify(token, process.env.APP_SECRET);

    // assign req
    req.user = {userId};

    next();
}