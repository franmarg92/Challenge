const express = require('express');
const { check, validationResult } = require('express-validator');
const { Player } = require('../models/playerModels');

const router = express.Router();

// Obtener todos los jugadores con paginación
router.get('/', async (req, res) => {
    const limit = parseInt(req.query.limit) || 10; // Número de resultados por página
    const page = parseInt(req.query.page) || 1; // Número de la página actual

    try {
        const offset = (page - 1) * limit; // Calcular el desplazamiento
        const players = await Player.findAll({
            limit: limit,
            offset: offset
        });
        res.json(players);
    } catch (error) {
        console.error(error); // Registrar el error
        res.status(500).json({ error: 'Error al obtener los jugadores' });
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
        res.status(500).json({ error: 'Error al obtener el jugador' });
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
        res.status(500).json({ error: 'Error al actualizar el jugador' });
    }
});

// Crear un nuevo jugador con validación
router.post(
    '/',
    [
        check('long_name').notEmpty().withMessage('El nombre del jugador es requerido'),
        check('overall').isInt({ min: 0, max: 100 }).withMessage('El overall debe ser un número entre 0 y 100'),
        // Agrega más validaciones según sea necesario
    ],
    async (req, res) => {
        const errors = validationResult(req); // Validar datos
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() }); // Devolver errores
        }

        try {
            const player = await Player.create(req.body);
            res.status(201).json(player);
        } catch (error) {
            console.error(error); // Registrar el error
            res.status(500).json({ error: 'Error al crear el jugador' });
        }
    }
);

module.exports = router;
