const express = require('express');
const Contenedor = require('../Contenedor.js');
const contenedor = new Contenedor('./productos.txt');
const isAdmin = require('../middlewares/isAdmin');

const {Router} = express;

const routerProductos = Router();

routerProductos.get('/:id?', isAdmin, async (req, res) => {
    const id = req.params.id;
    if (id) {
        const producto = await contenedor.getById(id);
        (routerProductos) ? res.send({Producto: producto}) : res.send({ error : 'producto no encontrado' });
    } else {
        const data = await contenedor.getAll();
        res.send({ Productos: data });
    }
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