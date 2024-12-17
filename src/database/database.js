import { Sequelize } from 'sequelize';
import environmentVariable from '../config/config.js';
const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME } = environmentVariable;

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: 'postgres',
  port: 5432,
  dialectOptions: {
    ssl: {
      require: true, // Obliga el uso de SSL
      rejectUnauthorized: false // Acepta certificados autofirmados
    }
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

export default sequelize;
