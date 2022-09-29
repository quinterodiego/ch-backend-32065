import faker from 'faker';
faker.locale = 'es';

function generarProductos(cantidad) {
    const productos = [];
    for(let producto = 0; producto < cantidad; producto++) {
        productos.push({
            id: producto+1,
            title: faker.commerce.product(),
            price: faker.commerce.price(),
            thumbnail: faker.image.technics()
        });
    }

    return productos;
};

export { generarProductos };