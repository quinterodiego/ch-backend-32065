import Contenedor from "../../containers/contenedorMongoDB.js";

class ProductosDaoMongoDB extends Contenedor {

    constructor() {
        super('productos', {
            title: { type: String, required: true },
            price: { type: Number, required: true },
            thumbnail: { type: String, required: true },
        })
    }
}

export default ProductosDaoMongoDB
