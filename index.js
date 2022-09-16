import mongoose from 'mongoose';
import * as model from './models/usuario.js';

CRUD();

async function CRUD() {
    try {
        // Conexion a la db
        const URL = 'mongodb://localhost:27017/ecommerce';
        await mongoose.connect(URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Base de datos conectada');

        // Create
        const user = { 
            nombre: 'Diego', 
            apellido: 'Quintero', 
            email: 'd86webs@gmail.com', 
            usuario: 'd86webs', 
            password: 123123 
        };

        const userSaveModel = new model.users(user);
        const savedUser = await userSaveModel.save();
        console.log(savedUser);

        // Read
        const userRead = await model.users.find();
        console.log(userRead);

        // Update
        const updatedUser = await model.users.updateOne({ nombre: 'Diego' }, { $set: { password: 222222 }});
        console.log(updatedUser);

        // Delete
        const deletedUser = await model.users.deleteOne({ nombre: 'Diego' });
        console.log(deletedUser);
    } catch (error) {
        console.log(error)
    }
}