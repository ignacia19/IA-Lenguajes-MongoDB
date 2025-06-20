const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/user');
require('dotenv').config(); // Añadido para manejo de variables de entorno

const app = express();
const PORT = process.env.PORT || 3000; // Usar variable de entorno o 3000 por defecto

// Conexión a MongoDB (mejorada con variables de entorno)
mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://IA-Lenguajes-MongoDB:josefa@cluster0.o2vllre.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('✔ Conectado a MongoDB fish-monitor'))
.catch((err) => console.error('✖ Error de conexión a MongoDB:', err));

// Middlewares
app.use(cors());
app.use(express.json());
app.use('/api', userRoutes);

// Ruta básica de prueba
app.get('/', (req, res) => {
    res.send('API de Fish Monitor funcionando');
});

// Manejo de errores 404
app.use((req, res) => {
    res.status(404).send('Ruta no encontrada');
});

// Inicio del servidor
app.listen(PORT, () => {
    console.log(`✔ Servidor corriendo en http://localhost:${PORT}`);
});