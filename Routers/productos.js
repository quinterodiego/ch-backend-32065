import express from 'express';
import Contenedor from '../containers/contenedorProducto.js';
const contenedor = new Contenedor('./db/productos.json');
import isAdmin from '../middlewares/isAdmin.js';

const {Router} = express;

const routerProductos = Router();

routerProductos.get('/:id?', isAdmin, async (req, res) => {
    const id = req.params.id;
    if (id) {
        const producto = await contenedor.getById(id);
        (producto) ? res.send({Producto: producto}) : res.send({ error : 'Producto no encontrado' });
    } else {
        const productos = await contenedor.getAll();
        res.send(productos);
    }
});

routerProductos.post('/', async (req, res) => {
    const producto = req.body;
    await contenedor.save(producto);
    res.send({
        message: 'Producto agregado'
    })
});

routerProductos.put('/:id', async (req, res) => {
    const id = req.params.id;
    const product = req.body;
    await contenedor.updateById(id, product);
    res.send({
        message: 'Producto actualizado'
    })
});

routerProductos.delete('/:id', async (req, res) => {
    const id = req.params.id;
    await contenedor.deleteById(parseInt(id));
    res.send({
        message: 'Producto borrado'
    })
});


export default routerProductos;