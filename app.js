const express = require('express');
const sequelize = require('./backend/config/database');
const playersRoutes = require('./backend/routes/playerRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsear JSON
app.use(express.json());

// Usar las rutas de players
app.use('/players', playersRoutes);

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
