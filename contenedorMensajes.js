import fs from 'fs';
import moment from 'moment';
import normalizr from 'normalizr';
const normalize = normalizr.normalize;

const schema = normalizr.schema;
const user = new schema.Entity('autores', {}, { idAttribute: 'email' });
const mensajes = new schema.Entity('mensaje', {
    author: user
});

const schemaMensajes = new schema.Entity('mensajes', {
mensajes: [mensajes]
})

class Contenedor {
    constructor ( path ) {
        this.path = path;
    }

    save = async ( item ) => {
        try {
            const data = await fs.promises.readFile( this.path, 'utf-8' );
            const items = JSON.parse( data );
            const mensajes = items[0].mensajes;
            let id = 0;
            if(mensajes.length > 0) {
                const IdsMensajes = mensajes.map(m => m.id);
                id = Math.max(...IdsMensajes) + 1;
            } else {
                id = 1;
            }
            const date = new Date();
            const timestamp = moment(date).format('DD/MM/YYYY HH:mm:ss');
            const nuevoMensaje = { ...item, id, timestamp };
            mensajes.push( nuevoMensaje );
            items.mensajes = mensajes;
            await fs.promises.writeFile( this.path, JSON.stringify( items, null, 2 ));
            return id;
        }
        catch ( error ) {
            console.error( error );
            console.log('Hubo un error en el proceso');
        }
    }

    getAll = async () => {
        try {
            const data = await fs.promises.readFile( this.path, 'utf-8' );
            const items = JSON.parse(data);
            const normalizedData = normalize(items[0], schemaMensajes);
            return normalizedData;
        } catch ( error ) {
            console.error( error );
            console.log('Hubo un error en la ejecución');
        }
    }
}

export default Contenedor;