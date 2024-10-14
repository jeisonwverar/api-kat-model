import { DataTypes } from 'sequelize';
import sequelize from '../database/database.js';

const Galery = sequelize.define('galery', {
  galery_id: {
    type: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull: false
  },
  creator: {
    type: DataTypes.UUIDV4,
    allowNull: false
  },
  name_galery: {
    type: DataTypes.STRING(50),
    defaultValue: 'galery'
  },
  description: {
    type: DataTypes.STRING(255)
  }
});

export default Galery;
