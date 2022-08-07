import express from 'express';
import dotenv from 'dotenv';
import routerProductos from './Routers/productos.js';


dotenv.config();

const server = express();


server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(express.static('public'));
server.use('/api/productos', routerProductos);

const PORT = 8080 || process.env.PORT;



server.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));

server.on('error', (error) => console.error(`Se ha producido un error ${error}`));