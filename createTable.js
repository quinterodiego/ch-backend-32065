// import {options} from './options/mysqlDB.js';
import {options} from './options/sqliteDB.js';
import knex from 'knex';

const knexConnection = knex(options);

const createTable = async () => {
    try {
        await knexConnection.schema.createTable('tb_cars', (table) => {
            table.increments('id').primary();
            table.string('name').notNullable();
            table.integer('price').notNullable();
        })
        console.log('tabla creada');
    } catch (err) {
        console.log(err); throw err
        
    } finally {
        knexConnection.destroy();
    }
}

createTable();