import admin from "firebase-admin"
import config from './../config.js'

admin.initializeApp({
    credential: admin.credential.cert(config.firebase)
})

const db = admin.firestore();
const query = db.collection('productos');

class ContenedorFirebase {

    constructor(nombreColeccion) {
        this.coleccion = db.collection(nombreColeccion)
    }

    save = async ( producto ) => {
        try {
            const doc = query.doc();
            await doc.create(producto);
            console.log('Producto creado');
        }
        catch ( error ) {
            console.error( error );
            console.log('Hubo un error en el proceso');
        }
    }

    getById = async ( id ) => {
        try {
            const doc = query.doc(id);
            const item = await doc.get();
            const producto = item.data();
            return producto;
        }
        catch ( error ) {
            console.error( error );
            console.log('Hubo un error en la ejecución');
        }
    }

    getAll = async () => {
        try {
            const querySnapshot = await query.get();
            let docs = querySnapshot.docs;

            const response = docs.map((doc) => ({
                id: doc.id,
                title: doc.data().title,
                price: doc.data().price,
                thumbnail: doc.data().thumbnail
            }))

            return response;
        } catch ( error ) {
            console.error( error );
            console.log('Hubo un error en la ejecución');
        }
    }

    deleteById = async ( id ) => {
        try {
            await this.coleccion.deleteOne({ _id: id });
            console.log('Productos eliminado')
        } catch ( error ) {
            console.error( error );
            console.log('Hubo un error en la ejecución');
        }
    }
    
    deleteAll = async () => {
        try {
            await this.coleccion.remove();
            console.log('Todos los productos eliminados')
        } catch ( error ) {
            console.error( error );
            console.log('Hubo un error en la ejecución');
        }
    }

    updateById = async (id, product) => {
        try {
            const { title, price, thumbnail } = product;
            const doc = query.doc(id);
            const item = await doc.update({
                title,
                price,
                thumbnail
            })
            console.log('Producto actualizado');
        } catch (error) {
            console.error( error );
            console.log('Hubo un error en la ejecución');
        }
    }
}

export default ContenedorFirebase