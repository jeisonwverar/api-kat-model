import cloudinary from '../utils/cloudinaryConect.js'


const uploadCloudinary=async(imageUrl,folder = 'katmodel')=>{
    try {
        const result=await cloudinary.uploader.upload(imageUrl,{folder})
        return result
    } catch (error) {
        console.error("Error uploaded  Cloudinary:", error);
    throw error;
    }
};
export default uploadCloudinary;