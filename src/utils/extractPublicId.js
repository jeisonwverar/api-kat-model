export default function extractPublicId(url) {
  try {
    const regex = /\/upload\/(?:v\d+\/)?(katmodel\/.+?)(?:\.\w+)?$/;
    const match = url.match(regex);
    return match ? match[1] : null;
  } catch (error) {
    console.error('Error extrayendo public_id:', error);
    return null;
  }
}
