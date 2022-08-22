const express = require('express');
const {Server: HttpServer} = require('http');
const {Server: IOServer} = require('socket.io');
const dotenv = require('dotenv');
const {engine} = require('express-handlebars');
const Contenedor = require('./Contenedor.js');
const moment = require('moment');
const contenedorProductos = new Contenedor('./productos.txt');
const contenedorMensajes = new Contenedor('./mensajes.txt');

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
        console.log(data)
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