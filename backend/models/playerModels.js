const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Asegúrate de que esta ruta sea correcta

const Player = sequelize.define('Player', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    fifa_version: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fifa_update: {
        type: DataTypes.STRING,
        allowNull: false
    },
    player_face_url: {
        type: DataTypes.STRING,
        allowNull: false
    },
    long_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    player_positions: {
        type: DataTypes.STRING,
        allowNull: false
    },
    club_name: {
        type: DataTypes.STRING,
        allowNull: true
    },
    nationality_name: {
        type: DataTypes.STRING,
        allowNull: true
    },
    overall: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: 1,
            max: 100
        }
    },
    potential: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: 1,
            max: 100
        }
    },
    value_eur: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    wage_eur: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: 16,
            max: 40
        }
    },
    height_cm: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    weight_kg: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    preferred_foot: {
        type: DataTypes.STRING,
        allowNull: true
    },
    weak_foot: {
        type: DataTypes.INTEGER,
        allowNull: true,
        validate: {
            min: 1,
            max: 5
        }
    },
    skill_moves: {
        type: DataTypes.INTEGER,
        allowNull: true,
        validate: {
            min: 1,
            max: 5
        }
    },
    international_reputation: {
        type: DataTypes.INTEGER,
        allowNull: true,
        validate: {
            min: 1,
            max: 5
        }
    },
    work_rate: {
        type: DataTypes.STRING,
        allowNull: true
    },
    body_type: {
        type: DataTypes.STRING,
        allowNull: true
    },
    pace: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    shooting: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    passing: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    dribbling: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    defending: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    physic: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
}, {
    sequelize,
    modelName: 'Player',
    tableName: 'players',
    timestamps: false // Cambiar a true si usas createdAt y updatedAt
});

module.exports = { Player };
