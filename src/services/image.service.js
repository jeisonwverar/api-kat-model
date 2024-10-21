import Image from '../models/imageModels.js';

export const findAll = async () => await Image.findAll();
export const findForId = async (id) => await Image.findByPk(id);
export const create = async (data) => {
  try {
    const response = await Image.create(data);
    return response;
  } catch (error) {
    return { error };
  }
};
export const deleteData = async (id) =>
  await Image.destroy({ where: { image_id: id } });
export const updateData = async (data, id) =>
  await Image.update(data, { where: { image_id: id } });
