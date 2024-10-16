import { Router } from 'express';

const routerGalery = Router();

routerGalery.get('/galery');
routerGalery.post('/galery');
routerGalery.put('/galery');
routerGalery.delete('/galery/:id');

export default routerGalery;
