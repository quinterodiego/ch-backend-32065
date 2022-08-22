const fs =require('fs');
class Contenedor {
    constructor ( path ) {
        this.path = path;
    }

    save = async ( producto ) => {
        try {
            const data = await fs.promises.readFile( this.path, 'utf-8' );
            const productos = JSON.parse( data );
            let id = 0;
            if(productos.length > 0) {
                const IdsProductos = productos.map(p => p.id);
                id = Math.max(...IdsProductos) + 1;
            } else {
                id = 1;
            }
            const nuevoProducto = { ...producto, id };
            productos.push( nuevoProducto );
            await fs.promises.writeFile( this.path, JSON.stringify( productos, null, 2 ));
            console.log(`ID: ${id}`);
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
            return productoBuscado;
        }
        catch ( error ) {
            console.error( error );
            console.log('Hubo un error en la ejecución');
        }
    }

    getAll = async () => {
        try {
            const data = await fs.promises.readFile( this.path, 'utf-8' );
            const productos = JSON.parse( data );
            // console.log('Productos: ', productos)
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
}

module.exports = Contenedor;