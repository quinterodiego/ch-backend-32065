import fs from 'fs';
import moment from 'moment';

class Contenedor {
    constructor ( path ) {
        this.path = path
    }

    save = async (carrito) => {
        try {
            const data = await fs.promises.readFile( this.path, 'utf-8');
            const carritos = JSON.parse(data);
            let id = 0;
            if(carritos.length > 0) {
                const IdsCarritos = carritos.map(p => p.id);
                id = Math.max(...IdsCarritos) + 1;
            } else {
                id = 1;
            }
            const date = new Date();
            const timestamp = moment(date).format('DD/MM/YYYY HH:mm:ss');
            const nuevoCarrito = { ...carrito, id, timestamp };
            carritos.push( nuevoCarrito );
            await fs.promises.writeFile( this.path, JSON.stringify( carritos, null, 2 ));
            return id;

        } catch (error) {
            console.error( error );
            console.log('Hubo un error en el proceso');
        }
    }

    getAll = async () => {
        try {
            const data = await fs.promises.readFile( this.path, 'utf-8' );
            const carritos = JSON.parse( data );
            return carritos;
        } catch ( error ) {
            console.error( error );
            console.log('Hubo un error en la ejecución');
        }
    }

    getById = async (id) => {
        try {
            const data = await fs.promises.readFile( this.path, 'utf-8' );
            const carritos = JSON.parse( data );
            const carritoBuscado = carritos.filter( c => c.id == id);
            if (carritoBuscado.length > 0) {
                return carritoBuscado[0].productos
            } else {
                return null
            }
        }
        catch ( error ) {
            console.error( error );
            console.log('Hubo un error en la ejecución');
        }
    }

    saveProduct = async (id, producto) => {
        try {
            const data = await fs.promises.readFile( this.path, 'utf-8' );
            let carritos = JSON.parse(data);
            let carritoBuscado = carritos.filter(c => c.id == id);
            carritoBuscado[0].productos.push(producto);
            await fs.promises.writeFile(this.path, JSON.stringify(carritos, null, 2))
        } catch (error) {
            console.error( error );
            console.log('Hubo un error en la ejecución');
        }
    }

    deleteByCartId = async (id) => {
        try {
            const data = await fs.promises.readFile( this.path, 'utf-8' );
            let carritos = JSON.parse(data);
            carritos = carritos.filter(c => c.id != id)
            await fs.promises.writeFile(this.path, JSON.stringify(carritos, null, 2))
        } catch (error) {
            console.error( error );
            console.log('Hubo un error en la ejecución');
        }
    }

    deleteByProductId = async (id, id_prod) => {
        try {
            const data = await fs.promises.readFile( this.path, 'utf-8' );
            let carritos = JSON.parse(data);
            let carritoBuscado = carritos.filter(c => c.id == id);
            carritoBuscado[0].productos = carritoBuscado[0].productos.filter(p => p.id != id_prod);
            await fs.promises.writeFile(this.path, JSON.stringify(carritos, null, 2));
        } catch (error) {
            console.error( error );
            console.log('Hubo un error en la ejecución');
        }
    }
}

export default Contenedor;