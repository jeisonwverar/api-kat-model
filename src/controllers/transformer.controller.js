import { json } from 'sequelize';
import generateTryOn from '../services/transformer.service.js';

const transformer = async (req, res) => {
  try {
    const { text = '', denoisingSteps = 30, seed = 42 } = req.body;
    const personImage = req.files['personImage'][0];
    const clothingImage = req.files['clothingImage'][0];

    //const personImageBlob = new Blob([personImage.buffer], { type: personImage.mimetype });
    //const clothingImageBlob = new Blob([clothingImage.buffer], { type: clothingImage.mimetype });

    const result = await generateTryOn(
      personImage.buffer,
      clothingImage.buffer,
      text,
      parseInt(denoisingSteps),
      parseInt(seed)
    );

    return res.json({ result: result });
  } catch (error) {
    console.error('Error en transformerController:', error);
    return res.status(500).json({ error: 'Error al procesar la solicitud.' });
  }
};

export default transformer;
