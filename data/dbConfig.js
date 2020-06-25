const knex = require('knex');

const config = require('../knexfile.js');

const enviornment = process.env.DB_ENV || "development";

module.exports = knex(config.development);