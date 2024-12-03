import { Router } from 'express';
import authRequired from '../middlewares/validateToken.js';
import {
  getProfile,
  updateProfile,
  deleteProfile
} from '../controllers/profile.controller.js';
const profileRouter = Router();

profileRouter.get('/profile', authRequired, getProfile);
profileRouter.patch('/profile', authRequired, updateProfile);
profileRouter.delete('/profile', authRequired, deleteProfile);

export default profileRouter;
