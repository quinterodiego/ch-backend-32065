const socket = io.connect();

const schema = normalizr.schema;
const user = new schema.Entity('autores', {}, { idAttribute: 'email' });
const mensajes = new schema.Entity('mensaje', {
    author: user
});

const schemaMensajes = new schema.Entity('mensajes', {
mensajes: [mensajes]
})

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
    const { mensajes } = data;
    const html = mensajes.map((mensaje) => {
        return (`
            <div>
                <strong class="text-primary">${mensaje.author.email}</strong> [<span class="text-danger">${mensaje.timestamp}</span>]: <em class="text-success">${mensaje.mensaje}</em>&nbsp;&nbsp;<img src=${mensaje.author.avatar}/>
            </div>
        `)
    }).join('');
    document.getElementById('mensajes').innerHTML = html;
}

const formProductos = document.getElementById('form-productos');
if (formProductos) {
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
}

const formMensajes = document.getElementById('form-mensajes');

if(formMensajes) {
    formMensajes.onsubmit = e => {
        e.preventDefault();
        const mensaje = {
            author: {
                email: document.getElementById('email').value,
                name: document.getElementById('name').value,
                lastName: document.getElementById('lastName').value,
                age: document.getElementById('age').value,
                alias: document.getElementById('alias').value,
                avatar: document.getElementById('avatar').value,
            },
            mensaje: document.getElementById('mensaje').value,
        };
        socket.emit('nuevo-mensaje', mensaje);
        formMensajes.reset();
    }

    socket.on('mensajes', (data) => {
        const denormalizedEmpresa = normalizr.denormalize(
            data.result, schemaMensajes, data.entities
        );
        renderMensajes(denormalizedEmpresa);
    })
}

socket.on('productos', (data) => {
    renderProductos(data);
});

socket.on('productosRandom', (data) => {
    renderProductos(data);
});

socket.on('mensajes', (data) => {
    const denormalizedData = normalizr.denormalize(
        data.result, schemaMensajes, data.entities
    );
    renderMensajes(denormalizedData);
    
    const lon = JSON.stringify(denormalizedData).length
    const loo = JSON.stringify(data).length

    const diferencia = loo - lon;
    const porcentaje = (diferencia / loo) * 100;
    // console.log(JSON.stringify(denormalizedData))
    // console.log(lon);
    // console.log(JSON.stringify(data))
    // console.log(loo);      
    console.log(`Porcentaje de compresión ${porcentaje.toFixed(2)}%`);
    document.getElementById('centro-mensajes').innerHTML = `Centro de mensajes (Compresión: ${porcentaje.toFixed(2)}%)`;
});