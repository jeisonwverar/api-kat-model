import { Router } from 'express';
import {
  getAll,
  getUser,
  getUpdate,
  getCreate,
  getDelete
} from '../controllers/user.controller.js';
const userRoutes = Router();

userRoutes.get('/user', getAll);
userRoutes.get('/user/:id',getUser);
userRoutes.post('/user',getCreate);
userRoutes.delete('/user/:id',getDelete)
export default userRoutes;
