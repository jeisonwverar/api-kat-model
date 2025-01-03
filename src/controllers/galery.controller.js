import { v4 as uuidv4 } from 'uuid';
import { findOne } from '../services/user.service.js';
import {
  create,
  deleteData,
  findAll,
  findForId,
  updateData
} from '../services/galery.service.js';

export const getGalery = async (req, res) => {
  const id = req.params.id;
  let response = null;
  const user = req.user;

  try {
    if (!id) {
      const userdata = await findOne({
        where: {
          email: user.email
        }
      });
      response = await findAll({
        where: {
          creator: userdata.dataValues.user_id
        }
      });
    } else {
      response = await findForId(id);
    }

    if (!response) {
      return res.status(404).json({ message: 'NOT FOUND' });
    }

    if (response.length === 0) {
      await create({
        galery_id: uuidv4(),
        creator: user.user_id,
        name_galery: 'general',
        description: 'galeria general'
      });

    }

    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ message: 'Error en server', error });
  }
};
export const createGalery = async (req, res) => {
  const body = req.body;
  const user = req.user;
  try {
    const userdata = await findOne({
      where: {
        email: user.email
      }
    });

    const data = {
      galery_id: uuidv4(),
      creator: userdata.dataValues.user_id,
      ...body
    };

    const response = await create(data);
    if (response.error) {
      return res.status(500).json({
        message: 'Error al crear la galeria',
        error: response.error.parent.detail
      });
    }
    return res.status(201).json({
      message: `User create success name user ${response.name_galery} `
    });
  } catch (error) {
    return res.status(500).json(error);
  }
};
export const updateGalery = async (req, res) => {
  const { id } = req.params;
  const { nameGalery, description } = req.body;

  try {
    const [updated] = await updateData(
      { name_galery: nameGalery, description: description },
      id
    );
    if (updated) {
      const updatedUser = await findForId(id); // Obtener el usuario actualizado
      return res.status(200).json({ galery: updatedUser });
    }

    // Si no se encontró ningún registro, devolver un 404
    return res.status(404).json({ message: 'galeria no encontrado' });
  } catch (error) {
    return res
      .status(500)
      .json({ message: 'Error al actualizar la galeria', error });
  }
};
export const deleteGalery = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await deleteData(id);
    console.log(deleted);
    if (deleted) {
      return res.status(200).json({ message: 'deleted galery success' });
    }

    return res.status(404).json({ message: 'galery not found' });
  } catch (error) {
    return res
      .status(500)
      .json({ message: 'Error al eliminar la galeria', error });
  }
};
