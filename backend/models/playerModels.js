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
        allowNull: true // Ajustado a true ya que permite NULL
    },
    nationality_name: {
        type: DataTypes.STRING,
        allowNull: true // Ajustado a true ya que permite NULL
    },
    overall: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    potential: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    value_eur: {
        type: DataTypes.INTEGER,
        allowNull: true // Ajustado a true ya que permite NULL
    },
    wage_eur: {
        type: DataTypes.INTEGER,
        allowNull: true // Ajustado a true ya que permite NULL
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    height_cm: {
        type: DataTypes.INTEGER,
        allowNull: true // Ajustado a true ya que permite NULL
    },
    weight_kg: {
        type: DataTypes.INTEGER,
        allowNull: true // Ajustado a true ya que permite NULL
    },
    preferred_foot: {
        type: DataTypes.STRING,
        allowNull: true // Ajustado a true ya que permite NULL
    },
    weak_foot: {
        type: DataTypes.INTEGER,
        allowNull: true // Ajustado a true ya que permite NULL
    },
    skill_moves: {
        type: DataTypes.INTEGER,
        allowNull: true // Ajustado a true ya que permite NULL
    },
    international_reputation: {
        type: DataTypes.INTEGER,
        allowNull: true // Ajustado a true ya que permite NULL
    },
    work_rate: {
        type: DataTypes.STRING,
        allowNull: true // Ajustado a true ya que permite NULL
    },
    body_type: {
        type: DataTypes.STRING,
        allowNull: true // Ajustado a true ya que permite NULL
    },
    pace: {
        type: DataTypes.INTEGER,
        allowNull: true // Ajustado a true ya que permite NULL
    },
    shooting: {
        type: DataTypes.INTEGER,
        allowNull: true // Ajustado a true ya que permite NULL
    },
    passing: {
        type: DataTypes.INTEGER,
        allowNull: true // Ajustado a true ya que permite NULL
    },
    dribbling: {
        type: DataTypes.INTEGER,
        allowNull: true // Ajustado a true ya que permite NULL
    },
    defending: {
        type: DataTypes.INTEGER,
        allowNull: true // Ajustado a true ya que permite NULL
    },
    physic: {
        type: DataTypes.INTEGER,
        allowNull: true // Ajustado a true ya que permite NULL
    },
    // Continúa agregando todos los campos restantes de la tabla aquí...
}, {
    sequelize,
    modelName: 'Player',
    tableName: 'players',
    timestamps: false // O true si usas timestamps
});

module.exports = { Player };
