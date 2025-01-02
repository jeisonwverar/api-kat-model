import { Sequelize } from 'sequelize';
import environmentVariable from '../config/config.js';
const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME , DB_PORT_DB} = environmentVariable;

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: 'postgres',
  port:  DB_PORT_DB,
  /* pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  } */
});

export default sequelize;
