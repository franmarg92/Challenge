const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('fifa_manager', 'root', '36233877', {
    host: 'localhost',
    dialect: 'mysql',
});

module.exports = sequelize;
