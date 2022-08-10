const express = require('express');
const dotenv = require('dotenv');
const {engine} = require('express-handlebars');
const routerProductos = require('./Routers/productos.js');
const Contenedor = require('./Contenedor.js');
const contenedor = new Contenedor('./productos.txt');

dotenv.config();

const server = express();

server.engine(
    'hbs',
    engine({
        extname: '.hbs',
        defaultLayout: 'index.hbs',
        layoutDir: './views/layouts',
        partialsDir: './views/partials'
    })
);

server.set('view engine', 'hbs');
server.set('views', './views');

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
// server.use(express.static('public'));
// server.use('/api/productos', routerProductos);

server.get('/', async (req, res) => {
    const data = await contenedor.getAll();
    res.render('main', { productsData: data, productList: true });
});

const PORT = 8080 || process.env.PORT;

server.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));

server.on('error', (error) => console.error(`Se ha producido un error ${error}`));