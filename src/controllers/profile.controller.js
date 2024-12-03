import {
  findOne,
  deleteData,
  updateData,
  findForId
} from '../services/user.service.js';
import { encrypt } from '../utils/bycript.js';
export const getProfile = async (req, res) => {
  const user = req.user;

  try {
    const responseProfile = await findOne({
      where: { email: user.email }
    });

    return res.status(200).json(responseProfile);
  } catch (error) {
    return res.status(500).json({ message: 'error on server', error });
  }
};

export const updateProfile = async (req, res) => {
  const user = req.user; // Usuario autenticado
  const body = req.body;

  try {
    // Verificar si el usuario existe
    const profile = await findOne({
      where: { email: user.email }
    });

    if (!profile) {
      return res.status(404).json({ message: 'Perfil no encontrado' });
    }

    const idProfile = profile.dataValues.user_id;

    // Construir dinámicamente el objeto de actualización
    const updates = {};
    if (body.password) updates.password = encrypt(body.password); // Encriptar contraseña si se envía
    if (body.email) updates.email = body.email; // Actualizar email si se envía
    if (body.name) updates.name = body.name; // Actualizar nombre si se envía
    // Agregar más campos según sea necesario

    // Verificar si hay campos para actualizar
    if (Object.keys(updates).length === 0) {
      return res
        .status(400)
        .json({ message: 'No se enviaron campos para actualizar' });
    }

    // Actualizar los datos del perfil
    const [updated] = await updateData(updates, idProfile);

    if (updated) {
      // Obtener los datos del perfil actualizado
      const updatedUser = await findForId(idProfile);
      return res.status(200).json({ user: updatedUser });
    } else {
      return res
        .status(400)
        .json({ message: 'No se pudo actualizar el perfil' });
    }
  } catch (error) {
    console.error('Error en el servidor:', error);
    return res.status(500).json({
      message: 'Error en el servidor',
      error: error.message
    });
  }
};

export const deleteProfile = async (req, res) => {
  const user = req.user;
  try {
    const responseProfile = await findOne({
      where: user.email
    });
    const deleted = await deleteData(responseProfile.dataValues.user_id);
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
