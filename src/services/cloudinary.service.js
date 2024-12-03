import cloudinary from '../utils/cloudinaryConect.js';

export const uploadCloudinary = async (imageUrl, folder = 'katmodel') => {
  try {
    const result = await cloudinary.uploader.upload(imageUrl, { folder });
    return result;
  } catch (error) {
    console.error('Error uploaded  Cloudinary:', error);
    throw error;
  }
};

export const deleteCloudinary = async (publicId) => {
  try {
    const result = cloudinary.uploader.destroy(publicId);
    console.log(result);
    return result;
  } catch (error) {
    console.error('Error eliminando la imagen en Cloudinary:', error);
    throw error;
  }
};
