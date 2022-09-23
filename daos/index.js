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
        productosDao = new ProductosDaoFirebase()
        break
    case 'mongodb':
        const { default: ProductosDaoMongoDB }  = await import('./productos/productosDaoMongoDB.js');
        productosDao = new ProductosDaoMongoDB()

        break
    case 'mariadb':
        
        break
    case 'sqlite3':
        
        break
    default:
        
        break
}

export { productosDao, carritosDao }