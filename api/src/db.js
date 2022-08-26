require("dotenv").config();
const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");
//Nos traemos la ruta de los modelos
const basename = path.basename(__filename);
const pathModels = path.join(__dirname, "/models");

//Inyectando string con la conexion a MongoDB
const connectionString = `mongodb+srv://willd:salva2020@cluster0.tn1v8dy.mongodb.net/?retryWrites=true&w=majority`;

//Opciones para conexion de mongoose
const options = {
  autoIndex: false, // Don't build indexes
  maxPoolSize: 10, // Maintain up to 10 socket connections
  serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
  socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
  family: 4, // Use IPv4, skip trying IPv6
  keepAlive: true,
  keepAliveInitialDelay: 300000,
};

//Estableciendo conexion
const conn = mongoose.createConnection(connectionString, options);

//Traemos todos los modelos de la carpeta models
const modelsDB = fs
  .readdirSync(pathModels)
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  );

//Vamos a injectar la conexion con mongoDB a cada modelo
modelsDB.forEach( m => {
    const modelName = m.split(".")[0];
    conn.model(modelName, require(`${pathModels}\\${m}`))
})

//Podemos requerir los modelos desde la conn mongoose
const { Clases, Estudiantes, Profesor, Sede, Universidad } = conn.models;

module.exports = {
    ...conn.models,
    conn : conn
}