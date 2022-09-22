import mongoose from 'mongoose';
import config from './../config.js';
import mongodb from 'mongodb'
// import productoSchema from './../models/productos.js';

await mongoose.connect(config.mongodb.url, config.mongodb.options)

class Contenedor {
    constructor ( nombreColeccion, esquema ) {
        this.productoSchema = mongoose.Schema(esquema)
        this.coleccion = mongoose.model(nombreColeccion, this.productoSchema)
    }

    save = async ( producto ) => {
        try {
            const product = this.coleccion(producto)
            await product.save(producto);
        }
        catch ( error ) {
            console.error( error );
            console.log('Hubo un error en el proceso');
        }
    }

    getById = async ( id ) => {
        try {
            const producto = await this.coleccion.findById(id);
            return producto;
        }
        catch ( error ) {
            console.error( error );
            console.log('Hubo un error en la ejecución');
        }
    }

    getAll = async () => {
        try {
            return await this.coleccion.find();
        } catch ( error ) {
            console.error( error );
            console.log('Hubo un error en la ejecución');
        }
    }

    deleteById = async ( id ) => {
        try {
            const newID = new mongodb.ObjectID(id)
            await this.coleccion.deleteOne({ _id: newID });
            console.log('Productos eliminado')
        } catch ( error ) {
            console.error( error );
            console.log('Hubo un error en la ejecución');
        }
    }
    
    deleteAll = async () => {
        try {
            await this.coleccion.remove();
            console.log('Todos los productos eliminados')
        } catch ( error ) {
            console.error( error );
            console.log('Hubo un error en la ejecución');
        }
    }

    updateById = async (id, product) => {
        try {
            const data = await fs.promises.readFile( this.path, 'utf-8' );
            let productos = JSON.parse( data );
            productos = productos.filter( p => p.id != id);
            product.id = parseInt(id);
            productos.push(product);
            productos.sort(function (a, b) {
                if (a.id > b.id) {
                    return 1;
                }
                if (a.id < b.id) {
                    return -1;
                }
                return 0;
            });
            await fs.promises.writeFile( this.path, JSON.stringify(productos, null, 2));
        } catch (error) {
            console.error( error );
            console.log('Hubo un error en la ejecución');
        }
    }
}

export default Contenedor;