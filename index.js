import mongoose from 'mongoose';
import * as model from './models/usuario.js';



async function CRUD() {
    try {
        // Conexion a la db
        const URL = 'mongodb://localhost:27017/ecommerce32065';
        await mongoose.connect(URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Base de datos conectada');
    } catch (error) {
        
    }
}