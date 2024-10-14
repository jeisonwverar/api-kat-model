import { DataTypes } from 'sequelize';
import sequelize from '../database/database.js';

const Image = sequelize.define('image', {
  image_id: {
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull: false
  },
  galery_id: {
    type: DataTypes.UUIDV4,
    allowNull: false
  },
  name_image: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  description: {
    type: DataTypes.STRING(255)
  },
  url: {
    type: DataTypes.TEXT
  }
});

export default Image;
