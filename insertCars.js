// import {options} from './options/mysqlDB.js';
import {options} from './options/sqliteDB.js';
import knex from 'knex';

const knexConnection = knex(options);

const cars = [
    { name: 'Audi', price: 123123 },
    { name: 'Mercedes', price: 2344323 },
    { name: 'Volkswagen', price: 1224 },
    { name: 'Mazda', price: 12412224444 },
    { name: 'Ferrari', price: 12423423423 },
];

knexConnection('tb_cars').insert(cars)
    .then(() => console.log('datos insertados'))
    .catch((err) => { console.log(err); throw err } )
    .finally(() => {
        knexConnection.destroy();
    });