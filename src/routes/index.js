import { Router } from 'express';
import routerImage from './image.routes.js';
import routerGalery from './galery.routes.js';
import userRoutes from './user.routes.js';
import authRouter from './auth.routes.js';
import routerTransformer from './transformer.routes.js';
import profileRouter from './profile.routes.js';
const routerMain = Router();

routerMain.use('/', routerImage);
routerMain.use('/', routerGalery);
routerMain.use('/', userRoutes);
routerMain.use('/', authRouter);
routerMain.use('/', routerTransformer);
routerMain.use('/', profileRouter);
export default routerMain;
