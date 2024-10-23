import { Router } from 'express';
import routerImage from './image.routes.js';
import routerGalery from './galery.routes.js';
import userRoutes from './user.routes.js';
import authRouter from './auth.routes.js';

const routerMain = Router();

routerMain.use('/', routerImage);
routerMain.use('/', routerGalery);
routerMain.use('/', userRoutes);
routerMain.use('/', authRouter);
export default routerMain;
