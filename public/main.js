const socket = io.connect();

const renderProductos = (data) => {
    const html = data.map((producto) => {
        return (`
        <tr>
            <th scope="row">${producto.id}</th>
            <td>${producto.title}</td>
            <td>$${producto.price}</td>
            <td><img src="${producto.thumbnail}" width="75"/></td>
        </tr>
        `)
    }).join('');
    document.getElementById('productos').innerHTML = html;
}

const renderMensajes = (data) => {
    const html = data.map((mensaje) => {
        return (`
            <div>
                <strong class="text-primary">${mensaje.email}</strong> [<span class="text-danger">${mensaje.timestamp}</span>]: <em class="text-success">${mensaje.mensaje}</em>
            </div>
        `)
    }).join('');
    document.getElementById('mensajes').innerHTML = html;
}

const formProductos = document.getElementById('form-productos');
formProductos.onsubmit = e => {
    e.preventDefault();
    const producto = {
        title: document.getElementById('title').value,
        description: document.getElementById('description').value,
        thumbnail: document.getElementById('thumbnail').value,
        price: parseInt(document.getElementById('price').value),
    }

    socket.emit('nuevo-producto', producto);
    formProductos.reset();
}

const formMensajes = document.getElementById('form-mensajes');
formMensajes.onsubmit = e => {
    e.preventDefault();
    const mensaje = {
        email: document.getElementById('email').value,
        mensaje: document.getElementById('mensaje').value,
    };

    socket.emit('nuevo-mensaje', mensaje);
    formMensajes.reset();
}

socket.on('productos', (data) => {
    renderProductos(data);
    console.log(data)
})

socket.on('mensajes', (data) => {
    renderMensajes(data);
    console.log(data)
})