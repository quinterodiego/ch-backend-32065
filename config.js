export default {
    mysql: {
        client: 'mysql',
        connection: {
            host: '127.0.0.1',
            user: 'root',
            password: '',
            database: 'coderhouse'
        }
    },
    sqlite : {
        client: 'sqlite3',
        connection: {
            filename: './db/mensajes.sqlite'
        },
        useNullAsDefault: true
    }
}