let productosDao
let carritosDao
import dotenv from 'dotenv';
dotenv.config();

switch (process.env.PERS) {
    case 'json':
        const { default: ProductosDaoArchivo } = await import('./productos/ProductosDaoArchivo.js')
        const { default: CarritosDaoArchivo } = await import('./carritos/CarritosDaoArchivo.js')
        productosDao = new ProductosDaoArchivo()
        carritosDao = new CarritosDaoArchivo()
        break
    case 'firebase':
        const { default: ProductosDaoFirebase }  = await import('./productos/productosDaoFirebase.js');
        const { default: CarritosDaoFirebase }  = await import('./carritos/carritosDaoFirebase.js');
        productosDao = new ProductosDaoFirebase()
        carritosDao = new CarritosDaoFirebase()
        break
    case 'mongodb':
        const { default: ProductosDaoMongoDB }  = await import('./productos/productosDaoMongoDB.js');
        productosDao = new ProductosDaoMongoDB()
        break
    case 'mysql':
        const { default: ProductosDaoMySql } = await import('./productos/productosDaoMySql.js');
        productosDao = new ProductosDaoMySql;
        break
    case 'sqlite3':
        const { default: ProductosDaoSqlite3 } = await import('./productos/productosDaoSqlite3.js');
        productosDao = new ProductosDaoSqlite3;
        break
    default:
        
        break
}

export { productosDao, carritosDao }