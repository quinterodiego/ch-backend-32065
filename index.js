const express = require('express');
const server = express();
const Contenedor = require('./Contenedor');

const contenedor = new Contenedor('./productos.txt');

const PORT = 8080;

server.get('/productos', async (req, res) => {
    const data = await contenedor.getAll();
    res.send({
        Productos: data
    })
})

server.get('/productoRandom', async (req, res) => {
    const data = await contenedor.getAll();
    const cantidad = data.length;
    const id = Math.floor(Math.random() * cantidad) + 1;
    const productoRandom = await contenedor.getById(id);
    res.send({ProductoRandom: productoRandom});
})

server.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));

server.on('error', (error) => console.error(`Se ha producido un error ${error}`));