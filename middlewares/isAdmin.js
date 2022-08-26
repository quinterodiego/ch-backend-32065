const value = require('../Globales');
const admin = value.IS_ADMIN;

const isAdmin = (req, res, next) => {
    if (!admin) {     
        const err = { error : -1, descripcion: 'Ruta no autorizada' }

        return next(err);
    } else {
        return next();
    }
}

module.exports = isAdmin;