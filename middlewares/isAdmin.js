const value = require('../Globales');
const admin = value.IS_ADMIN;

const isAdmin = (req, res, next) => {
    if (!admin) {     
        var err = new Error('Not authorized! Go back!');
        err.status = 401;
        return next(err);
    } else {
        return next();
    }
}

module.exports = isAdmin;