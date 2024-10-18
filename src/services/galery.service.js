import Galery from '../models/galeryModels.js';

export const findAll = async () => await Galery.findAll();
export const findForId = async (id) => await Galery.findByPk(id);
export const create = async (data) => {
  try {
    const response = await Galery.create(data);
    return response;
  } catch (error) {
    return { error };
  }
};
