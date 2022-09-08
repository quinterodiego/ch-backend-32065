import config from './config.js'
import knex from 'knex';

const knexConnectionMysql = knex(config.mysql);
const knexConnectionSqlite = knex(config.sqlite);

const createTableProductos = async () => {
    try {
        await knexConnectionMysql.schema.dropTableIfExists('tb_productos');
        await knexConnectionMysql.schema.createTable('tb_productos', (table) => {
            table.increments('id').primary();
            table.string('title').notNullable();
            table.string('thumbnail').notNullable();
            table.string('description').notNullable();
            table.integer('price').notNullable();
        })
    } catch (error) {
        console.log(error);
    } finally {
        knexConnectionMysql.destroy();
    }
}

const createTableMensajes = async () => {
    try {
        await knexConnectionSqlite.schema.dropTableIfExists('tb_mensajes');
        await knexConnectionSqlite.schema.createTable('tb_mensajes', (table) => {
            table.increments('id').primary();
            table.string('email').notNullable();
            table.string('mensaje').notNullable();
            table.dateTime('timestamp').notNullable();
        })
    } catch (error) {
        console.log(error);
    } finally {
        knexConnectionSqlite.destroy();
    }
}

createTableProductos();
createTableMensajes();