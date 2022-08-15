const express = require('express');
const dotenv = require('dotenv');
const Contenedor = require('./Contenedor.js');
const contenedor = new Contenedor('./productos.txt');

dotenv.config();

const server = express();

server.set('view engine', 'pug');
server.set('views', './views');

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.get('/', async (req, res) => {
    res.render('index');
});

server.get('/productos', async (req, res) => {
    const productos = await contenedor.getAll();
    const data = { productos };
    res.render('productsList', data);
});

server.post('/productos', async (req, res) => {
    const product = {
        title: req.body.title,
        thumbnail: req.body.thumbnail,
        url: req.body.url,
        price: req.body.price
    }

    await contenedor.save(product);
    res.redirect('/productos');
});

const PORT = 8080 || process.env.PORT;

server.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));

server.on('error', (error) => console.error(`Se ha producido un error ${error}`));