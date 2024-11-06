import { Router } from 'express';
import authRequired from '../middlewares/validateToken.js';
import {
  getGalery,
  createGalery,
  deleteGalery,
  updateGalery
} from '../controllers/galery.controller.js';

const routerGalery = Router();

routerGalery.get('/galery/:id?', authRequired, getGalery);
routerGalery.post('/galery', authRequired, createGalery);
routerGalery.patch('/galery/:id', authRequired, updateGalery);
routerGalery.delete('/galery/:id', authRequired, deleteGalery);

export default routerGalery;
