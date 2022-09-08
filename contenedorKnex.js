import knex from 'knex';

export class Contenedor {
    constructor ( option, tabla ) {
        this.knexConnection = knex(option),
        this.tabla = tabla
    }

    save = async ( elemento ) => {
        try {
            await this.knexConnection(this.tabla).insert(elemento);
        } catch ( error ) {
            console.error( error );
            console.log('Hubo un error en el proceso save');
        } finally {
            this.knexConnection.destroy();
        }
    }

    getById = async ( id ) => {
        try {
            const elemento = await this.knexConnection.from(this.tabla).select('*').where('id', '=', id);
            return elemento;
        }
        catch ( error ) {
            console.error( error );
            console.log('Hubo un error en la ejecución getById');
        }
    }

    getAll = async () => {
        try {
            const elementos = await this.knexConnection.from(this.tabla).select('*');
            return elementos[0];
        } catch ( error ) {
            console.error( error );
            console.log('Hubo un error en la ejecución getAll');
        }
    }

    deleteById = async ( id ) => {
        try {
            await this.knexConnection(this.tabla).where('id', '=', id).delete();
        } catch ( error ) {
            console.error( error );
            console.log('Hubo un error en la ejecución deleteById');
        }
    }
    
    deleteAll = async () => {
        try {
            await this.knexConnection(this.tabla).delete();
        } catch ( error ) {
            console.error( error );
            console.log('Hubo un error en la ejecución deleteAll');
        }
    }
}