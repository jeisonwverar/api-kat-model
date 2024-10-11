import { Sequelize } from 'sequelize';
import environmentVariable from '../config/config.js';
const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME } = environmentVariable;

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: 'postgres'
});

export default sequelize;
