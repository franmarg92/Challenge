const express = require('express');
const { check, validationResult } = require('express-validator');
const { Op } = require('sequelize'); // Operadores para filtrado
const { Player } = require('../models/playerModels');

const router = express.Router();

// Obtener todos los jugadores con paginación y filtrado
router.get('/', async (req, res) => {
    const limit = parseInt(req.query.limit) || 16; // Número de resultados por página (por defecto 16)
    const page = parseInt(req.query.page) || 1; // Página actual (por defecto 1)
    const { name, club, position } = req.query; // Filtros de búsqueda

    try {
        // Si el valor de page no es un número válido, se asigna a 1
        if (isNaN(page) || page < 1) {
            return res.status(400).json({ error: 'El número de página debe ser un número válido y mayor que 0' });
        }

        const offset = (page - 1) * limit; // Calcular el desplazamiento

        // Condiciones para el filtrado
        const whereClause = {};
        if (name) {
            whereClause.long_name = { [Op.like]: `%${name}%` };
        }
        if (club) {
            whereClause.club_name = { [Op.like]: `%${club}%` };
        }
        if (position) {
            whereClause.player_positions = { [Op.like]: `%${position}%` };
        }

        console.log('whereClause:', whereClause); // Verifica la estructura de los filtros

        // Búsqueda con filtros y paginación
        const players = await Player.findAll({
            where: whereClause,
            limit: limit,
            offset: offset,
        });

        console.log('players:', players); // Verifica los resultados obtenidos

        // Verificar si no hay resultados
        if (players.length === 0) {
            return res.status(404).json({ error: 'No se encontraron jugadores con los criterios proporcionados' });
        }

        res.json(players);
    } catch (error) {
        console.error(error); // Registrar el error
        res.status(500).json({ error: 'Error al obtener los jugadores', details: error.message });
    }
});

// Obtener jugador por ID
router.get('/:id', async (req, res) => {
    const playerId = parseInt(req.params.id, 10); // Convertir a número
    if (isNaN(playerId)) {
        return res.status(400).json({ error: 'ID del jugador no válido' });
    }

    try {
        const player = await Player.findByPk(playerId);
        if (player) {
            res.json(player);
        } else {
            res.status(404).json({ error: 'Jugador no encontrado' });
        }
    } catch (error) {
        console.error(error); // Registrar el error
        res.status(500).json({ error: 'Error al obtener el jugador', details: error.message });
    }
});

// Actualizar información de un jugador
router.put('/:id', async (req, res) => {
    try {
        const [updated] = await Player.update(req.body, {
            where: { id: req.params.id }
        });
        if (updated) {
            const updatedPlayer = await Player.findByPk(req.params.id);
            res.status(200).json(updatedPlayer);
        } else {
            res.status(404).json({ error: 'Jugador no encontrado' });
        }
    } catch (error) {
        console.error(error); // Registrar el error
        res.status(500).json({ error: 'Error al actualizar el jugador', details: error.message });
    }
});



router.post('/create', async (req, res) => {
    try {
        const {
            fifa_version,
            fifa_update,
            player_face_url,
            long_name,
            player_positions,
            club_name,
            nationality_name,
            overall,
            potential,
            value_eur,
            wage_eur,
            age,
            height_cm,
            weight_kg,
            preferred_foot,
            weak_foot,
            skill_moves,
            international_reputation,
            work_rate,
            body_type,
            pace,
            shooting,
            passing,
            dribbling,
            defending,
            physic,
            gender
        } = req.body;

        // Crear el nuevo jugador
        const newPlayer = await Player.create({
            fifa_version,
            fifa_update,
            player_face_url,
            long_name,
            player_positions,
            club_name,
            nationality_name,
            overall,
            potential,
            value_eur,
            wage_eur,
            age,
            height_cm,
            weight_kg,
            preferred_foot,
            weak_foot,
            skill_moves,
            international_reputation,
            work_rate,
            body_type,
            pace,
            shooting,
            passing,
            dribbling,
            defending,
            physic,
            gender
        });

        res.status(201).json({ message: 'Jugador creado exitosamente', player: newPlayer });
    } catch (error) {
        console.error(error); // Imprimir el error en la consola
        res.status(500).json({ message: 'Error al crear el jugador', error: error.message });
    }
});

module.exports = router;
