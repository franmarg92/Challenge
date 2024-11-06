const express = require('express');
const cors = require('cors');
const sequelize = require('./backend/config/database');
const playersRoutes = require('./backend/routes/playerRoutes');
const authRoutes = require('./backend/routes/authRoutes'); 
const dotenv = require('dotenv');

dotenv.config(); 

const app = express(); 


const corsOptions = {
    origin: 'http://localhost:4200', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true 
};

app.use(cors(corsOptions)); 

const PORT = process.env.PORT || 3000;

// Middleware para parsear JSON
app.use(express.json());

// Usar las rutas de players
app.use('/players', playersRoutes);

// Usar las rutas de autenticación
app.use('/auth', authRoutes); 

// Sincronización con la base de datos
sequelize.sync()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Servidor corriendo en http://localhost:${PORT}`);
        });
    })
    .catch((error) => {
        console.error('Error al sincronizar la base de datos:', error);
    });
