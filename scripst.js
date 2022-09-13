// Consigna: Utilizando Mongo Shell, crear una base de datos llamada ecommerce que contenga dos colecciones: mensajes y productos.

    ./bin/mongod --dbpath ./_data
    use ecommerce
    db.createCollection("mensajes")
    db.createCollection("productos")
    show collections

// 1) Agregar 10 documentos con valores distintos a las colecciones mensajes y productos. El formato de los documentos debe estar en correspondencia con el que venimos utilizando en el entregable con base de datos MariaDB. 

    db.productos.insertMany([
        {
            "title": "K10 Hot-Swappable RBG Backlight Gateron G Pro Mechanical BROWN SWITCH",
            "thumbnail": "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/652/371/products/k10-h31-2d569a9d6f039918ae16407066179013-480-0.jpeg",
            "description": "KEYCHRON K10 Diseñado para maximizar su productividad con el diseño de tamaño completo más popular con teclado numérico. La opción intercambiable en caliente...",
            "price": 100
        },
        {
            "title": "K2 V2 Hot Swappable RGB Backlight Gateron G Pro Mechanical BROWN Switch",
            "thumbnail": "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/652/371/products/keychron-k2-hot-swappable-wireless-mechanical-keyboard-for-mac-windows-gateron-switch-brown-with-type-c-rgb-white-backlight_1800x18001-81f48d6579b89e40bf16565142664377-480-0.jpg",
            "description": "CONOCÉ EL K2 VERSIÓN 2 HOT SWAPPABLE       K2 es un teclado súper táctil inalámbrico o con cable que le brinda todas las teclas y funciones que necesita mien...",
            "price": 500
        },
        {
            "title": "K3 Non-Backlight Ultra-Slim Brown Switch",
            "thumbnail": "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/652/371/products/keychronk3-non-backlit-ultra-slimwirelessmechanicalkeyboard-low-profile-gateron-brown_1800x18001-b044b4c1532166372216581547874923-480-0.jpg",
            "description": "El teclado sin retroiluminación K3 ha incluido teclas para los sistemas operativos Windows y Mac. UN TECLADO MECÁNICO INALÁMBRICO ULTRA DELGADO Incorporar lo...",
            "price": 2000
        },
        {
            "title": "Keychron K2 RGB Backlight Gateron G Pro Brown Switch",
            "thumbnail": "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/652/371/products/keychron-k2-wireless-mechanical-keyboard-for-mac-windows-ios-gateron-switch-brown-with-type-c-rgb-white-backlight_53059406-af50-40d8-8566-c3b5f1e85a62_1800x18001-ba8a513dbb9543f76b16506566912246-480-0.jpeg",
            "description": "CONOCÉ EL K2 VERSIÓN 2      K2 es un teclado súper táctil inalámbrico o con cable que le brinda todas las teclas y funciones que necesita mientras lo mantien...",
            "price": 2500
        },
        {
            "title": "Q2 Fully Assembled Gateron G Pro Brown Switch Carbon Black",
            "thumbnail": "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/652/371/products/keychron-q2-custom-mechanical-keyboard-fully-assembled-version-black-brown_00bf75b2-fd0d-4fbc-97e5-55179df82eff_1800x18001-82e7f34881f6f330e416567035461279-480-0.jpg",
            "description": "Keychron Q2 El Q2 &amp;#8203;&amp;#8203;es un teclado mecánico totalmente personalizable con un diseño compacto que lleva su experiencia de escritura al siguiente ni...",
            "price": 3000
        },
        {
            "title": "Q3 Fully Assembled Gateron G Pro Red Switch Silver Grey",
            "thumbnail": "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/652/371/products/keychron-q3-qmkvia-mechanical-keyboard-fully-assembled-grey-red_1800x18001-7e1aa93ebd406b8f7f16569392380413-480-0.jpg",
            "description": "  Keychron Q3 El Q3 es un teclado mecánico totalmente personalizable para llevar tu experiencia de escritura a lo más alto. Con el diseño clásico sin teclado...",
            "price": 3250
        },
        {
            "title": "Q5 Fully Assembled Navy Blue Gateron G Pro Brown Switch",
            "thumbnail": "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/652/371/products/q5-j3-keychron-q5-qmk-via-custom-mechanical-keyboard-96-percent-compact-full-size-layout-full-aluminum-frame-for-mac-windows-linux-fully-assembled-blue-gateron-g-pro-switch-brown_faa186bd-a4c6-4df9-b711-48e16f3ebebfed23ad16578985575923-480-0.jpg",
            "description": "KEYCHRON Q5 Estableciendo el mejor ejemplo para el uso eficiente del espacio, el Q5 tiene un diseño compacto del 96% mientras conserva todas las funciones es...",
            "price": 1600
        },
        {
            "title": "K1 V5 Low Profile RGB Backlight Aluminum Body Low Profile Mechanical BROWN Switch",
            "thumbnail": "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/652/371/products/11-2bb757d8e884f3cac016426102310457-480-0.jpeg",
            "description": "Este producto será entregado después del  23 de junio. El K1 ha incluido teclas para los sistemas operativos Windows y Mac.   NOVEDADES EN K1V5: Se agregó el...",
            "price": 900
        },
        {
            "title": "K10 RGB Backlight Aluminum Frame Gateron G Pro Mechanical Brown Switch",
            "thumbnail": "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/652/371/products/k10-c31-a863fece90f9904c9916506552550213-480-0.jpg",
            "description": "KEYCHRON K10 Diseñado para maximizar su productividad con el diseño de tamaño completo más popular con teclado numérico. La opción intercambiable en caliente...",
            "price": 5000
        },
        {
            "title": "K2 NO Backlight Red Switch",
            "thumbnail": "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/652/371/products/keychron-k2-non-backlight-version-mechanical-keyboard-red-switch-for-mac-windows_1800x18001-1c41f7137475c8116416486491880799-480-0.jpeg",
            "description": "LA MEJOR COMBINACIÓN DE TECLADO DE TAMAÑO COMPLETO Y TENKEYLESS K2 es un teclado inalámbrico o con cable súper táctil que le brinda todas las teclas y funcio...",
            "price": 4500
        }])

    db.mensajes.insertMany([
        {
            "email": "aaa@aaa.com",
            "mensaje": "Hola!!",
            "timestamp": "12/08/2022 09:00:000",
        },
        {
            "email": "aaa@aaa.com",
            "mensaje": "Hola!!",
            "timestamp": "12/08/2022 09:00:000",
        },
        {
            "email": "aaa@aaa.com",
            "mensaje": "Hola!!",
            "timestamp": "12/08/2022 09:00:000",
        },
        {
            "email": "aaa@aaa.com",
            "mensaje": "Hola!!",
            "timestamp": "12/08/2022 09:00:000",
        },
        {
            "email": "aaa@aaa.com",
            "mensaje": "Hola!!",
            "timestamp": "12/08/2022 09:00:000",
        },
        {
            "email": "aaa@aaa.com",
            "mensaje": "Hola!!",
            "timestamp": "12/08/2022 09:00:000",
        },
        {
            "email": "aaa@aaa.com",
            "mensaje": "Hola!!",
            "timestamp": "12/08/2022 09:00:000",
        },
        {
            "email": "aaa@aaa.com",
            "mensaje": "Hola!!",
            "timestamp": "12/08/2022 09:00:000",
        },
        {
            "email": "aaa@aaa.com",
            "mensaje": "Hola!!",
            "timestamp": "12/08/2022 09:00:000",
        },
        {
            "email": "aaa@aaa.com",
            "mensaje": "Hola!!",
            "timestamp": "12/08/2022 09:00:000",
        }])

// 2) Definir las claves de los documentos en relación a los campos de las tablas de esa base. En el caso de los productos, poner valores al campo precio entre los 100 y 5000 pesos(eligiendo valores intermedios, ej: 120, 580, 900, 1280, 1700, 2300, 2860, 3350, 4320, 4990). 


// 3) Listar todos los documentos en cada colección.
db.productos.find()
db.mensajes.find()

// 4) Mostrar la cantidad de documentos almacenados en cada una de ellas.
db.productos.countDocuments()
db.mensajes.countDocuments()

// 5) Realizar un CRUD sobre la colección de productos:
//      a) Agregar un producto más en la colección de productos
        db.productos.insertOne({
            "title": "K2 NO Backlight Red Switch",
            "thumbnail": "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/652/371/products/keychron-k2-non-backlight-version-mechanical-keyboard-red-switch-for-mac-windows_1800x18001-1c41f7137475c8116416486491880799-480-0.jpeg",
            "description": "LA MEJOR COMBINACIÓN DE TECLADO DE TAMAÑO COMPLETO Y TENKEYLESS K2 es un teclado inalámbrico o con cable súper táctil que le brinda todas las teclas y funcio...",
            "price": 4500
        })

//      b) Realizar una consulta por nombre de producto específico:
        db.productos.find({ title: "Keychron K2 RGB Backlight Gateron G Pro Brown Switch"})

//          I) Listar los productos con precio menor a 1000 pesos.
            db.productos.find({"price": {$lt: 1000}})

//          II) Listar los productos con precio entre los 1000 a 3000 pesos.
            db.productos.find({"price": {$gt: 1000, $lt: 3000}})

//          III) Listar los productos con precio mayor a 3000 pesos.
            db.productos.find({"price": {$gt: 3000}})
            
//          IV) Realizar una consulta que traiga sólo el nombre del tercer producto más barato.
            db.productos.find({}, {"title": 1, _id: 0}).sort({"price": 1})

//      c) Hacer una actualización sobre todos los productos, agregando el campo stock a todos ellos con un valor de 100.
            db.productos.updateMany({}, {$set: {"stock": 100}})

//      d) Cambiar el stock a cero de los productos con precios mayores a 4000 pesos.
            db.productos.updateMany({"price": {$gt: 4000}}, {$set: {"stock": 0}})

//      e) Borrar los productos con precio menor a 1000 pesos 
            db.productos.deleteMany({"price": {$lt: 1000}})


// 6) Crear un usuario 'pepe' clave: 'asd456' que sólo pueda leer la base de datos ecommerce. Verificar que pepe no pueda cambiar la información.
use admin
db.createUser({user: "pepe", pwd: "asd456", roles: [{role: "read", db: "ecommerce"}]})
./bin/mongod --dbpath ./_data --auth
./bin/mongosh -u pepe
Enter password: asd456
use ecommerce
db.productos.find()
db.productos.insertOne({"title": "test"})