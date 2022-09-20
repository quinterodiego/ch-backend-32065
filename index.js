import mongoose from 'mongoose';

const URL = 'mongodb+srv://d86webs:Maradona005511@cluster0.ugnxru6.mongodb.net/ecommerce?retryWrites=true&w=majority';

const userSchema = new mongoose.Schema({
    nombre: String,
    apellido: String,
    dni: { type: String, unique: true }
});

const userModel = mongoose.model('usuarios', userSchema);

(async function () {
    try {
        // Conexion a la db
        await mongoose.connect(URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Base de datos conectada');

        const users = await userModel.find({});

        console.log(users);
    } catch (error) {
        console.log(`Error en la conexion a la base de datos ${error}`);
    }
})()