const express = require("express");
const { connectToDatabase } = require("./db/mongo.db"); // Solo traemos la conexión
const rutas = require("./routes/tarea.routes");
const app = express();
const PORT = 3001;
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(rutas);

app.listen(PORT, async () => {
    await connectToDatabase(); // Llamamos la conexión
    console.log(`Aplicación levantada en el puerto ${PORT}`);
});