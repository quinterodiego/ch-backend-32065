const express = require('express');
const {Server: HttpServer} = require('http');
const {Server: IOServer} = require('socket.io');
const dotenv = require('dotenv');
const path = require('path');
const Contenedor = require('./Contenedor.js');
const contenedorProductos = new Contenedor('./productos.txt');
const routerProductos = require('./routers/productos');
const routerCarrito = require('./routers/carrito');

dotenv.config();

const server = express();
const httpServer = new HttpServer(server);
const io = new IOServer(httpServer);

server.set('view engine', 'ejs');
server.set('views', __dirname + '/views');
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(express.static(__dirname + '/public'));
server.use('/api/productos', routerProductos);
server.use('/api/carrito', routerCarrito);

server.get('/', (req, res) => {
    res.render('index');
});

server.get('/productos', (req, res) => {
    res.render('productos');
});

server.get('/carrito', (req, res) => {
    res.render('carrito');
});

server.get('/cargar', (req, res) => {
    res.render('cargar');
});

const PORT = 8080 || process.env.PORT;

io.on('connection', async socket => {
    console.log('Nuevo cliente conectado');
    const productos = await contenedorProductos.getAll();
    socket.emit('productos', productos);

    socket.on('nuevo-producto', async data => {
        console.log(data)
        await contenedorProductos.save(data);
        const productos = await contenedorProductos.getAll();
        io.sockets.emit('productos', productos);
    });
});

httpServer.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));

httpServer.on('error', (error) => console.error(`Se ha producido un error ${error}`));