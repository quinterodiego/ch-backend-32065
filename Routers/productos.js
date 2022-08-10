const express = require('express');
const Contenedor = require('../Contenedor.js');
const contenedor = new Contenedor('./productos.txt');

const {Router} = express;

const routerProductos = Router();

routerProductos.get('/', async (req, res) => {
    const data = await contenedor.getAll();
    res.send({
        Productos: data
    })
})

routerProductos.get('/:id', async (req, res) => {
    const id = req.params.id;
    const producto = await contenedor.getById(id);
    (producto.length>0) ? res.send({Producto: producto}) : res.send({ error : 'producto no encontrado' })
})

routerProductos.post('/', async (req, res) => {
    const producto = req.body;
    await contenedor.save(producto);
    res.send({
        message: 'Producto agregado'
    })
})

routerProductos.delete('/:id', async (req, res) => {
    const id = req.params.id;
    await contenedor.deleteById(parseInt(id));
    res.send({
        message: 'Producto borrado'
    })
})

module.exports = routerProductos;