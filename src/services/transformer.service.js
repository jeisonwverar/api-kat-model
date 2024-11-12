// src/services/transformer.service.js
import { Client } from "@gradio/client";
import HF_TOKEN from '../config/hugginfaceToken.js'
const client = await Client.connect("yisol/IDM-VTON",{
    hf_token:HF_TOKEN
}); // Conecta al modelo de Hugging Face

const generateTryOn = async (personImageBuffer, clothingImageBuffer, text, denoisingSteps, seed) => {
    try {
        // Configuración de imágenes como archivos Blob desde Buffer
        const personImage = new Blob([personImageBuffer], { type: 'image/jpeg' });
        const clothingImage = new Blob([clothingImageBuffer], { type: 'image/jpeg' });

        // Llamada al modelo con los parámetros requeridos
        const result = await client.predict("/tryon", [
            { personImage, clothingImage, text, denoisingSteps, seed }
        ]);

        return result.data;
    } catch (error) {
        console.error("Error en generateTryOn:", error);
        throw error;
    }
};

export default generateTryOn;