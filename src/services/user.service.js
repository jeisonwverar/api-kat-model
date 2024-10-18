import User from '../models/userModels.js';

export const findAll = async () => await User.findAll();
export const findForId = async (id) => await User.findByPk(id);
export const create = async (data) => {
  try {
    const response = await User.create(data);
    return response;
  } catch (error) {
    return { error };
  }
};
