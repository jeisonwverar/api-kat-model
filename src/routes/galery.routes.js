import { Router } from 'express';
import {
  getGalery,
  createGalery,
  deleteGalery,
  updateGalery
} from '../controllers/galery.controller.js';

const routerGalery = Router();

routerGalery.get('/galery', getGalery);
routerGalery.post('/galery', createGalery);
routerGalery.put('/galery', updateGalery);
routerGalery.delete('/galery/:id', deleteGalery);

export default routerGalery;
