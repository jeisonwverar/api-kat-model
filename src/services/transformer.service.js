// src/services/transformer.service.js
import { Client, handle_file } from '@gradio/client';
//import HF_TOKEN from '../config/hugginfaceToken.js'
//const api_info = await app.view_api();
import { compressImage } from '../utils/compressImage.js';

const generateTryOn = async (
  personImageBuffer,
  clothingImageBuffer,
  text,
  denoisingSteps,
  seed
) => {
  const app = await Client.connect('yisol/IDM-VTON'); // Conecta al modelo de Hugging Face
  try {
    const maxWidth = 512;
    const maxHeight = 512;
    const quality = 80;
    // Configuración de imágenes comprimidas
    const imagenPersonaComprimida = await compressImage(
      personImageBuffer,
      maxWidth,
      maxHeight,
      quality
    );
    const imagenPrendaComprimida = await compressImage(
      clothingImageBuffer,
      maxWidth,
      maxHeight,
      quality
    );

    // Llamada al modelo con los parámetros requeridos
    const result = await app.predict('/tryon', [
      {
        background: handle_file(imagenPersonaComprimida),
        layers: [],
        composite: null
      },
      handle_file(imagenPrendaComprimida),
      text,
      true,
      true,
      denoisingSteps,
      seed
    ]);
    //console.log(result.data);
    return result.data;
  } catch (error) {
    console.error('Error en generateTryOn:', error);
    throw error;
  }
};

export default generateTryOn;
