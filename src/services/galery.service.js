import Galery from '../models/galeryModels.js';

export const findAll = async (query) => await Galery.findAll(query);
export const findForId = async (id) => await Galery.findByPk(id);
export const create = async (data) => {
  try {
    const response = await Galery.create(data);
    return response;
  } catch (error) {
    return { error };
  }
};
export const deleteData = async (id) =>
  await Galery.destroy({ where: { galery_id: id } });
export const updateData = async (data, id) =>
  await Galery.update(data, { where: { galery_id: id } });
