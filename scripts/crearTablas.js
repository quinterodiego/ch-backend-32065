import knex from 'knex';
import config from './../config.js';

(async () => {
    const mysqlConnection = knex(config.mysql);
    try {
        await mysqlConnection.schema.dropTableIfExists('tb_productos');
        await mysqlConnection.schema.createTable('tb_productos', table => {
            table.increments('id').primary();
            table.string('title').notNullable();
            table.string('description').notNullable();
            table.string('thumbnail').notNullable();
            table.integer('price').notNullable();
        });
        console.log('Tabla tb_productos creada en mysql');
    } catch (error) {
        console.log(error);
    } finally {
        mysqlConnection.destroy()
    }

    const sqlite3Connection = knex(config.sqlite3);
    try {
        await sqlite3Connection.schema.dropTableIfExists('tb_mensajes');
        await sqlite3Connection.schema.createTable('tb_mensajes', table => {
            table.increments('id').primary();
            table.string('email').notNullable();
            table.string('mensaje').notNullable();
            table.dateTime('timestamp').notNullable();
        });
        console.log('Tabla tb_mensajes creada en mysql');
    } catch (error) {
        console.log(error);
    } finally {
        sqlite3Connection.destroy();
    }
})()