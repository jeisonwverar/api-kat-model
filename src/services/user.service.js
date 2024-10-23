import User from '../models/userModels.js';

export const findAll = async () => await User.findAll();
export const findForId = async (id) => await User.findByPk(id);
export const findOne = async (query) => await User.findOne(query);
export const create = async (data) => {
  try {
    const response = await User.create(data);
    return response;
  } catch (error) {
    return { error };
  }
};

export const deleteData = async (id) =>
  await User.destroy({ where: { user_id: id } });
export const updateData = async (data, id) =>
  await User.update(data, { where: { user_id: id } });
