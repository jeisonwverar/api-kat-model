import { Router } from 'express';
import authRequired from '../middlewares/validateToken.js';
import transformer from '../controllers/transformer.controller.js';
import upload from '../middlewares/upload.js';
const routerTransformer = Router();

routerTransformer.post(
  '/transformer',
  authRequired,
  upload.fields([
    { name: 'personImage', maxCount: 1 },
    { name: 'clothingImage', maxCount: 1 }
  ]),
  transformer
);

export default routerTransformer;
