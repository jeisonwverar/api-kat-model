import { v4 as uuidv4 } from 'uuid';
import {
  create,
  deleteData,
  findAll,
  findForId,
  updateData
} from '../services/image.service.js';
import {
  uploadCloudinary,
  deleteCloudinary
} from '../services/cloudinary.service.js';
import extractPublicId from '../utils/extractPublicId.js';
export const getImage = async (req, res) => {
  const galeryId = req.params.id;
  
  try {
    if (!galeryId) {
      return res.status(400).json({ message: 'Gallery ID is required' });
    }

    const images = await findAll({ where: { galery_id: galeryId } }); // Supón que `findAll` acepta un filtro

    if (!images || images.length === 0) {
      return res.status(404).json({ message: 'No images found for this gallery' });
    }

    return res.status(200).json(images);
  } catch (error) {
    console.error('Error fetching gallery images:', error); // Log del error
    return res.status(500).json({
      message: 'Error fetching gallery images',
      error: error.message
    });
  }
};


export const createImage = async (req, res) => {
  const { galeryId, nameImage, description, imageUrl } = req.body;
  try {
    const imageUrlCloudinary = await uploadCloudinary(imageUrl);
    //console.log(imageUrlCloudinary)
    const data = {
      image_id: uuidv4(),
      galery_id: galeryId,
      name_image: nameImage,
      description,
      url: imageUrlCloudinary.secure_url
    };
    const response = await create(data);
    //console.log(response)

    if (response.error) {
      return res.status(500).json({
        message: 'Error created image',
        error: response.error.parent.detail
      });
    }
    return res.status(201).json({ message: response });
  } catch (error) {
    return res.status(500).json(error);
  }
};
export const updateImage = async (req, res) => {
  const { id } = req.params;
  const { nameImage, description } = req.body;

  try {
    const [updated] = await updateData(
      { name_image: nameImage, description },
      id
    );
    if (updated) {
      const updateImage = await findForId(id); // Obtener el usuario actualizado
      return res.status(200).json({ image: updateImage });
    }

    // Si no se encontró ningún registro, devolver un 404
    return res.status(404).json({ message: 'image not found' });
  } catch (error) {
    return res.status(500).json({ message: 'error', error });
  }
};
export const deleteImage = async (req, res) => {
  const { id } = req.params; // Obtenemos el ID desde los parámetros de la solicitud
  try {
    // Buscar datos relacionados con el ID proporcionado
    const data = await findForId(id); // Supongo que esta función busca la imagen en tu base de datos
    if (!data) {
      return res.status(404).json({ message: 'Image not found' }); // Verificamos si no existe
    }

    const urlImage = data.url; // Obtenemos la URL de la imagen
    //console.log(urlImage);

    // Eliminamos el registro de la base de datos
    const deleted = await deleteData(id); // Supongo que esta función elimina el registro
    //console.log(deleted);

    if (deleted) {
      // Extraer el public_id de la URL (clave en Cloudinary)
      const idPublic = extractPublicId(urlImage); // Debes asegurarte de que esta función funcione correctamente
      const resultCloudinary = await deleteCloudinary(idPublic); // Eliminamos la imagen en Cloudinary

      return res.status(200).json({
        message: 'Image deleted successfully',
        cloud: resultCloudinary
      });
    }

    return res
      .status(500)
      .json({ message: 'Failed to delete image from database' });
  } catch (error) {
    console.error('Error in deleteImage:', error); // Log detallado del error
    return res.status(500).json({
      message: 'Error deleting image',
      error: error.message
    });
  }
};
