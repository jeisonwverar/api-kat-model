import generateTryOn from '../services/transformer.service.js';

const transformer = async (req, res) => {
  try {
    
    const { text = '', denoisingSteps = 30, seed = 42 } = req.body;
    const personImage = req.files['personImage']?.[0];
    const clothingImage = req.files['clothingImage']?.[0];
    //console.log(personImage,clothingImage)
    //const personImageBlob = new Blob([personImage.buffer], { type: personImage.mimetype });
    //const clothingImageBlob = new Blob([clothingImage.buffer], { type: clothingImage.mimetype });
    if (!personImage || !clothingImage) {
      return res.status(400).json({ error: "Faltan imágenes para procesar." });
    }

    const result = await generateTryOn(
      personImage.buffer,
      clothingImage.buffer,
      text,
      parseInt(denoisingSteps),
      parseInt(seed)
    );

    return res.status(200).json({result });
  } catch (error) {
    console.error('Error en transformerController:', error);
    return res.status(500).json({  error: 'Error al procesar las imágenes',
      details: error.message  });
  }
};

export default transformer;
