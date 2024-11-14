import { v2 as cloudinary } from "cloudinary";
import{API_CLOUDINARY_KEY,API_CLOUDINARY_SECRECT,CLOUDINARY_NAME} from '../config/cloudinary.js'
cloudinary.config({
    cloud_name:CLOUDINARY_NAME,
    api_key:API_CLOUDINARY_KEY,
    api_secret:API_CLOUDINARY_SECRECT
});

export default cloudinary;