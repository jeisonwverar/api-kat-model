import { Router } from 'express';
import {
  getUser,
  CreateUser
  
} from '../controllers/user.controller.js';
const userRoutes = Router();
userRoutes.get('/user/:id?', getUser);
userRoutes.post('/user',CreateUser);
userRoutes.delete('/user/:id',);
export default userRoutes;
