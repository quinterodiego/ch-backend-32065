const fs = require( 'fs' );

// Implementar programa que contenga una clase llamada Contenedor que reciba el nombre del archivo con el que va a trabajar e implemente los siguientes métodos:

class Contenedor {
    constructor ( path ) {
        this.path = path;
    }

//  save(Object): Number - Recibe un objeto, lo guarda en el archivo, devuelve el id asignado.
    save = async ( producto ) => {
        try {
            const data = await fs.promises.readFile( this.path, 'utf-8' );
            const productos = JSON.parse( data );
            const id = productos.length + 1;
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

    // getById(Number): Object - Recibe un id y devuelve el objeto con ese id, o null si no está.
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

    // getAll(): Object[] - Devuelve un array con los objetos presentes en el archivo.
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

    // deleteById(Number): void - Elimina del archivo el objeto con el id buscado.
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
    
    // deleteAll(): void - Elimina todos los objetos presentes en el archivo.
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

// const producto1 = {
//     title: 'Teclado Mecanico',
//     price: 12000,
//     thumbnail: 'aaaaaaaaaaaa'
// }
// const producto2 = {
//     title: 'Monitor widescreen',
//     price: 35000,
//     thumbnail: 'bbbbbbbbbbbb'
// }
// const producto3 = {
//     title: 'Mouse Bluetooth',
//     price: 13500,
//     thumbnail: 'cccccccc'
// }

// const contenedor = new Contenedor('./productos.txt');

// contenedor.save(producto1);

// contenedor.getById(2);

//  contenedor.getAll()

// contenedor.deleteById( 2 );

// contenedor.deleteAll();
