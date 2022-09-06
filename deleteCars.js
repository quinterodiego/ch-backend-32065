import {options} from './options/mysqlDB.js';
import knex from 'knex';

const knexConnection = knex(options);

knexConnection('tb_cars').where('id', '=', '3').delete()
    .then(console.log('registro eliminado'))
    .catch((err) => { console.log(err); throw err } )
    .finally(() => {
        knexConnection.destroy();
    });