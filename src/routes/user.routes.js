import { Router } from 'express';
import authRequired from '../middlewares/validateToken.js';
import {checkRoleAuth} from '../middlewares/validateRole.js';
import {
  getUser,
  createUser,
  userUpdate,
  userDelete
} from '../controllers/user.controller.js';
const userRoutes = Router();
userRoutes.get('/user/:id?', authRequired, checkRoleAuth(['admin']), getUser);
userRoutes.post('/user', authRequired, checkRoleAuth(['admin']), createUser);
userRoutes.patch(
  '/user/:id',
  authRequired,
  checkRoleAuth(['admin']),
  userUpdate
);
userRoutes.delete(
  '/user/:id',
  authRequired,
  checkRoleAuth(['admin']),
  userDelete
);
export default userRoutes;
