import { Router } from 'express';
import {createImage,getImage,deleteImage,updateImage} from '../controllers/image.controller.js';

const routerImage = Router();

routerImage.get('/image/:id?',getImage );
routerImage.post('/image',createImage);
routerImage.put('/image/:id',updateImage);
routerImage.delete('/image/:id',deleteImage);

export default routerImage;
