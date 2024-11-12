import generateTryOn from '../services/transformer.service.js';

const transformer = async (req, res) => {
  try {
    const { text = "", denoisingSteps = 20, seed = 3 } = req.body;
    const personImage = req.files['personImage'][0];
    const clothingImage = req.files['clothingImage'][0];

    const personImageBlob = new Blob([personImage.buffer], { type: personImage.mimetype });
    const clothingImageBlob = new Blob([clothingImage.buffer], { type: clothingImage.mimetype });

    const result = await generateTryOn(personImageBlob, clothingImageBlob, text, parseInt(denoisingSteps), parseInt(seed));

    res.json({ result: result.data });
  } catch (error) {
    console.error("Error en transformerController:", error);
    res.status(500).json({ error: "Error al procesar la solicitud." });
  }
};

export default transformer;