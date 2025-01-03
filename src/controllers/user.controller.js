import { v4 as uuidv4 } from 'uuid';
import { decrypt,encrypt} from '../utils/bycript.js';
import {
  findAll,
  findForId,
  create,
  deleteData,
  updateData
} from '../services/user.service.js';

export const getUser = async (req, res) => {
  const id = req.params.id;
  const user = req.user;
  let response = null;
  try {
    console.log('user: ', user);
    if (!id) {
      response = await findAll();
    } else {
      response = await findForId(id);
    }

    if (!response) {
      return res.status(404).json({ message: 'NOT FOUND' });
    }

    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ message: 'Error en server', error });
  }
};

export const userUpdate = async (req, res) => {
  const { id } = req.params;
  const { name, email, password, role } = req.body;

  try {
    const currentUser = await findForId(id);
    if (!currentUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    let updatedPassword = currentUser.password; // Mantener la contraseña existente por defecto
    if (password) {
      const isSamePassword = await decrypt(password, currentUser.password);
      if (!isSamePassword) {
        updatedPassword = await encrypt(password);
      }
    }

    const [updated] = await updateData({name, email, password: updatedPassword, role }, id);
    if (updated) {
      const updatedUser = await findForId(id); // Obtener el usuario actualizado
      return res.status(200).json({ user: updatedUser });
    }

    // Si no se encontró ningún registro, devolver un 404
    return res.status(404).json({ message: 'Usuario no encontrado' });
  } catch (error) {
    return res
      .status(500)
      .json({ message: 'Error al actualizar el usuario', error });
  }
};
export const createUser = async (req, res) => {
  const body = req.body;
  try {
    const data = { user_id: uuidv4(), ...body };

    const response = await create(data);
    if (response.error) {
      return res.status(500).json({
        message: 'Error al crear el usuario',
        error: response.error.parent.detail
      });
    }
    return res
      .status(201)
      .json({ message: `User create success name user ${response.name} ` });
  } catch (error) {
    return res.status(500).json(error);
  }
};
export const userDelete = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await deleteData(id);
    console.log(deleted);
    if (deleted) {
      return res.status(200).json({ message: 'deleted user success' });
    }

    return res.status(404).json({ message: 'user not found' });
  } catch (error) {
    return res
      .status(500)
      .json({ message: 'Error al eliminar el usuario', error });
  }
};
