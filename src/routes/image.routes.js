import { Router } from 'express';
import authRequired from '../middlewares/validateToken.js';
import {
  createImage,
  getImage,
  deleteImage,
  updateImage
} from '../controllers/image.controller.js';

const routerImage = Router();

routerImage.get('/image/:id?', authRequired, getImage);
routerImage.post('/image', authRequired, createImage);
routerImage.put('/image/:id', authRequired, updateImage);
routerImage.delete('/image/:id', authRequired, deleteImage);

export default routerImage;
