import User from '../models/userModels.js';

export const findAll = async () => await User.findAll();
