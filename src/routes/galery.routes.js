import { Router } from 'express';
import {
  getGalery,
  createGalery,
  deleteGalery,
  updateGalery
} from '../controllers/galery.controller.js';

const routerGalery = Router();

routerGalery.get('/galery/:id?', getGalery);
routerGalery.post('/galery', createGalery);
routerGalery.patch('/galery/:id', updateGalery);
routerGalery.delete('/galery/:id', deleteGalery);

export default routerGalery;
