import { Router } from 'express';
import { register, login } from '../controllers/auth.controller.js';
const authRouter = Router();

authRouter.post('/register', register);
authRouter.post('/login', login);
authRouter.post('/logout');
authRouter.get('/verify');

export default authRouter;
