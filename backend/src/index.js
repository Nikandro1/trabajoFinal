const express = require("express");
const { connectToDatabase } = require("./db/mongo.db");
const rutas = require("./routes/tarea.routes");
const app = express();
const PORT = process.env.PORT || 3001;
const cors = require("cors");

app.use(cors({
    origin: [
        "https://lista-de-tareas-ashen.vercel.app"
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));
app.use(express.json());
app.use(rutas);

app.listen(PORT, async () => {
    await connectToDatabase(); // Llamamos la conexión
    console.log(`Aplicación levantada en el puerto ${PORT}`);
});