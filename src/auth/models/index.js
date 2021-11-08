'use strict';

require('dotenv').config();
const userSchema = require('./users.js');

const DATABASE_URL = process.env.NODE_ENV === 'test' ? 'sqlite:memory:' : process.env.DATABASE_URL;

const { Sequelize, DataTypes } = require('sequelize');

let DATABASE_CONFIG= process.env.NODE_ENV === 'production' ? {
    dialectOptions: {
        ssl: { 
            require: true,
            rejectUnauthorized: false,
        }
    }
} : {};

let sequelize = new Sequelize(DATABASE_URL, DATABASE_CONFIG);

module.exports = {
    db: sequelize,
    users: userSchema(sequelize, DataTypes),
  }
  