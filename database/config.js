const { Sequelize } = require('sequelize');
require('dotenv').config();

const bdd = new Sequelize({
  dialect: 'mssql',
  host: process.env.BDD_HOST,
  database: process.env.BDD_NAME,
  username: process.env.BDD_USERNAME,
  password: process.env.BDD_PASSWORD,
});

module.exports = {
  bdd,
};
