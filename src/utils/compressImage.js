import sharp from 'sharp';

/**
 * Comprime una imagen ajustando su tamaño y calidad.
 * @param {Buffer} buffer - Buffer de la imagen original.
 * @param {number} maxWidth - Ancho máximo de la imagen comprimida.
 * @param {number} maxHeight - Alto máximo de la imagen comprimida.
 * @param {number} quality - Calidad de la imagen JPEG (0-100).
 * @returns {Promise<Buffer>} - Buffer de la imagen comprimida.
 */
export async function compressImage(
  buffer,
  maxWidth = 512,
  maxHeight = 512,
  quality = 80
) {
  return await sharp(buffer)
    .resize({ width: maxWidth, height: maxHeight, fit: 'inside' })
    .jpeg({ quality }) // Convierte a JPEG con la calidad especificada
    .toBuffer();
}
