import { Router } from 'express';
import authRequired from '../middlewares/validateToken.js';
import {
  getProfile,
  updateProfile,
  deleteProfile
} from '../controllers/profile.controller.js';
const profileRouter = Router();

profileRouter.get('/profile', authRequired, getProfile);
profileRouter.patch('/profile/:id', authRequired, updateProfile);
profileRouter.delete('/profile/:id', authRequired, deleteProfile);

export default profileRouter;
