import Image from './imageModels.js';
import Galery from './galeryModels.js';
import User from './userModels.js';
// User and Galery

User.hasMany(Galery, { foreignKey: 'creator', sourceKey: 'id_user' });
Galery.belongsTo(User, { foreignKey: 'creator' });
// Galery and image

Galery.hasMany(Image, { foreignKey: ' galery_id', sourceKey: 'galery_id' });
Image.belongsTo(Galery, { foreignKey: 'Galery_id' });
