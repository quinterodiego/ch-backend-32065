import {options} from './options/mysqlDB.js';
import knex from 'knex';

const knexConnection = knex(options);

knexConnection.from('tb_cars').where('id', '=', '3').update({ price: 2000000})
    .then(console.log('registro actualizado'))
    .catch((err) => { console.log(err); throw err } )
    .finally(() => {
        knexConnection.destroy();
    });