import { Router } from 'express';
import {
  getUser,
  createUser,
  userUpdate,
  userDelete
} from '../controllers/user.controller.js';
const userRoutes = Router();
userRoutes.get('/user/:id?', getUser);
userRoutes.post('/user', createUser);
userRoutes.patch('/user/:id', userUpdate);
userRoutes.delete('/user/:id', userDelete);
export default userRoutes;
