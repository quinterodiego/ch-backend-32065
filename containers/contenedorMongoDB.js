import mongoose from 'mongoose'

class Contenedor {
    constructor ( nombreColeccion, esquema ) {
        this.coleccionModel = mongoose.model(nombreColeccion, esquema)
    }

    save = async ( producto ) => {
        try {
            await this.coleccionModel.insertOne(producto);
        }
        catch ( error ) {
            console.error( error );
            console.log('Hubo un error en el proceso');
        }
    }

    getById = async ( id ) => {
        try {
            const data = await fs.promises.readFile( this.path, 'utf-8' );
            const productos = JSON.parse( data );
            const productoBuscado = productos.filter( p => p.id == id);
            if (productoBuscado.length > 0) {
                return productoBuscado 
            } else {
                return null
            }
        }
        catch ( error ) {
            console.error( error );
            console.log('Hubo un error en la ejecución');
        }
    }

    getAll = async () => {
        try {
            const productos = await this.coleccionModel.find();
            return productos;
        } catch ( error ) {
            console.error( error );
            console.log('Hubo un error en la ejecución');
        }
    }

    deleteById = async ( id ) => {
        try {
            const data = await fs.promises.readFile( this.path, 'utf-8' );
            const productos = JSON.parse( data );
            const nuevosProductos = productos.filter( p => p.id !== id);
            await fs.promises.writeFile( this.path, JSON.stringify(nuevosProductos, null, 2));
        } catch ( error ) {
            console.error( error );
            console.log('Hubo un error en la ejecución');
        }
    }
    
    deleteAll = async () => {
        try {
            await fs.promises.writeFile(this.path, '[]');
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