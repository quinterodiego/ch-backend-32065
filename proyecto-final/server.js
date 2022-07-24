const express = require('express');

const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

const PORT = 8080;

server.get('/products', (req, res) => {
    res.send({
        message: 'OK'
    })
})

server.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));

server.on('error', error => console.log(`Error en el servidor ${error}`));