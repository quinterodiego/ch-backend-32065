const getProducts = async () => {
    const response = await fetch('/api/productos');
    const products = await response.json();
    const template = product => `
        <div class="card m-2" style="width: 18rem;">
            <img src="${product.thumbnail}" class="card-img-top" alt="${product.title}">
            <div class="card-body">
                <h5 class="card-title">${product.title}</h5>
                <p class="card-text">${product.description}</p>
                <div class="text-center">
                    <button type="button" class="btn btn-success m-2" data-toggle="modal" data-target="#a${product.id}"><i class="fa-solid fa-pencil"></i></button>
                    <button class="btn btn-danger m-2" data-id="${product.id}"><i class="fa-solid fa-trash-can"></i></button>
                </div>
                <div class="text-center mt-3">
                    <button href="#" class="btn btn-primary">Agregar a carrito</button>
                </div>
            </div>
        </div>
        <div class="modal fade" id="a${product.id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        ...
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    `;
    const productsGrid = document.getElementById('products-grid');
    productsGrid.innerHTML = products.map(p => template(p)).join('');

    products.forEach(product => {
        const productNode = document.querySelector(`[data-id="${product.id}"]`);
        productNode.onclick = async e => {
            await fetch(`/api/productos/${product.id}`, {
                method: 'DELETE',
            })
            getProducts();
        }
    });
}

const addFormListener = () => {
    const formProduct = document.getElementById('form-product');
    formProduct.onsubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(formProduct);
        const data = Object.fromEntries(formData.entries());
        await fetch('http://localhost:8080/api/productos', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json' 
            }
        });
        formProduct.reset();
    }
}


const newCart = async () => {
    const data = {
        "code": "0000000000",
        "stock": 10,
        "title": "K3 Non-Backlight Ultra-Slim Brown Switch",
        "thumbnail": "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/652/371/products/keychronk3-non-backlit-ultra-slimwirelessmechanicalkeyboard-low-profile-gateron-brown_1800x18001-b044b4c1532166372216581547874923-480-0.jpg",
        "description": "El teclado sin retroiluminación K3 ha incluido teclas para los sistemas operativos Windows y Mac. UN TECLADO MECÁNICO INALÁMBRICO ULTRA DELGADO Incorporar lo...",
        "price": 33300,
        "timestamp": "23/08/2022 20:48:45"
    }
    await fetch('http://localhost:8080/api/carrito', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json' 
        }
    });
}

window.onload = () => {
    (window.location.pathname == '/productos') ? getProducts() : null; 
    (window.location.pathname == '/cargar') ? addFormListener() : null;
    // newCart();
}