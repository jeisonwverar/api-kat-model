import { Router } from 'express';
import { register } from '../controllers/auth.controller.js';
const authRouter=Router();

authRouter.post('/register',register)
authRouter.post('/login')
authRouter.post('/logout');
authRouter.get('/verify');



export default authRouter;