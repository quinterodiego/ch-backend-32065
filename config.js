export default {
    sqlite3: {
        client: 'sqlite3',
        connection: {
            filename: `./DB/mensajes.sqlite`
        },
        useNullAsDefault: true
    },
    mysql: {
        client: 'mysql',
        connection: {
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'coderhouse'
        }
    }
}
