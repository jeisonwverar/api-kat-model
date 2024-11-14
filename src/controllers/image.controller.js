import { v4 as uuidv4 } from 'uuid';
import {
  create,
  deleteData,
  findAll,
  findForId
} from '../services/image.service.js';
import uploadCloudinary from '../services/cloudinary.service.js'
export const getImage = async (req, res) => {
  const id = req.params.id;
  let response = null;
  try {
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
export const createImage = async (req, res) => {
  const {galeryId,nameImage,description,imageUrl} = req.body;
  try {
    const imageUrlCloudinary=await uploadCloudinary(imageUrl)
    //console.log(imageUrlCloudinary)
    const data = { 
      image_id: uuidv4(),
      galery_id:galeryId,
    name_image:nameImage,
    description,
    url:imageUrlCloudinary.secure_url
      
  };
  const response = await create(data);
  //console.log(response)
  
    if (response.error) {
      return res.status(500).json({
        message: 'Error created image',
        error: response.error.parent.detail
      });
    }
    return res.status(201).json({message:response });
  } catch (error) {
    return res.status(500).json(error);
  }
};
export const updateImage = async (req, res) => {
  const { id } = req.params;
  const { name, email, password } = req.body;

  try {
    const [updated] = await updateData({ name, email, password }, id);
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
export const deleteImage = async (req, res) => {
  try {
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
  } catch (error) {}
};
