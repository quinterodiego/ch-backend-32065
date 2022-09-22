import express from 'express';
const {Router} = express;
import isAdmin from '../middlewares/isAdmin.js';
import Contenedor from '../containers/contenedorCarrito.js';
const contenedor = new Contenedor('./db/carritos.json');

const routerCarrito = Router();

routerCarrito.post('/', async (req, res) => {
    const carrito = req.body;
    const id = await contenedor.save(carrito);
    res.send({
        message: `Carrito creado id: ${id}`
    })
});

routerCarrito.delete('/:id', async (req, res) => {
    const id = req.params.id;
    await contenedor.deleteByCartId(id);
    res.send({message: 'Carrito eliminado'});
});

routerCarrito.get('/:id/productos', async (req, res) => {
    const id = req.params.id;
    const carrito = await contenedor.getById(id);
    if (carrito === null ) {
        res.send({ error: 'Carrito no encontrado' });
    } else {
        res.send(carrito);
    }
});


routerCarrito.post('/:id/productos', async (req, res) => {
    const id = req.params.id;
    const producto = req.body;
    await contenedor.saveProduct(id, producto)
    res.send({message: 'Producto agregado al carrito'});
});

routerCarrito.delete('/:id/productos/:id_prod', async (req, res) => {
    const id = req.params.id;
    const id_prod = req.params.id_prod;
    await contenedor.deleteByProductId(id, id_prod);
    res.send({message: 'Producto eliminado'});
});

export default routerCarrito;