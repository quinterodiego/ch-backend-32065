import express from 'express';
import {Server as HttpServer} from 'http';
import {Server as IOServer} from 'socket.io';
import dotenv from 'dotenv';
import {engine} from 'express-handlebars';
import Contenedor from './contenedor.js';
import moment from 'moment';
import config from './config.js'
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const contenedorProductos = new Contenedor(config.mysql, 'tb_productos');
const contenedorMensajes = new Contenedor(config.sqlite3, 'tb_mensajes');

dotenv.config();

const server = express();
const httpServer = new HttpServer(server);
const io = new IOServer(httpServer);

server.engine(
    'hbs',
    engine({
        extname: '.hbs',
        defaultLayout: `${__dirname}/views/index`,
        layoutsDir: `${__dirname}/views/layouts`,
        partialsDir: `${__dirname}/views/partials`,
    })
);

server.set('view engine', 'hbs');
server.set('views', './views');

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(express.static('./public'))

server.get('/', async (req, res) => {
    res.render('layouts/form');
});

const PORT = 8080 || process.env.PORT;

io.on('connection', async socket => {
    console.log('Nuevo cliente conectado');
    const mensajes = await contenedorMensajes.getAll();
    const productos = await contenedorProductos.getAll();
    socket.emit('mensajes', mensajes);
    socket.emit('productos', productos);

    socket.on('nuevo-producto', async data => {
        await contenedorProductos.save(data);
        const productos = await contenedorProductos.getAll();
        io.sockets.emit('productos', productos);
    });

    socket.on('nuevo-mensaje', async data => {
        const date = new Date();
        data.timestamp = moment(date).format('DD/MM/YYYY HH:mm:ss');
        await contenedorMensajes.save(data);
        const mensajes = await contenedorMensajes.getAll();
        io.sockets.emit('mensajes', mensajes);
    });
});

httpServer.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));

httpServer.on('error', (error) => console.error(`Se ha producido un error ${error}`));