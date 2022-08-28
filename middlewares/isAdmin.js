const value = require('../Globales');
const admin = value.IS_ADMIN;

const isAdmin = (req, res, next) => {
    if (!admin) {     
        const err = { error : -1, descripcion: 'Ruta no autorizada' }
        next(err);
    } else {
        next();
    }
}

module.exports = isAdmin;