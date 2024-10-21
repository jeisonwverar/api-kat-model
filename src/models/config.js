import Image from './imageModels.js';
import Galery from './galeryModels.js';
import User from './userModels.js';
// Relación User y Galery
User.hasMany(Galery, { foreignKey: 'creator', sourceKey: 'user_id' });
Galery.belongsTo(User, { foreignKey: 'creator' });

// Relación Galery y Image
Galery.hasMany(Image, { foreignKey: 'galery_id', sourceKey: 'galery_id' });
Image.belongsTo(Galery, { foreignKey: 'galery_id' });