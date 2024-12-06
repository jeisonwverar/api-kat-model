import { Router } from 'express';
import { register, login, logout,validate } from '../controllers/auth.controller.js';
import { validateSchema } from '../middlewares/validateSchema.js';
import { registerSchema, loginSchema } from '../schema/auth.schema.js';
import { validate } from 'uuid';
const authRouter = Router();

authRouter.post('/register', validateSchema(registerSchema), register);
authRouter.post('/login', validateSchema(loginSchema), login);
authRouter.post('/logout', logout);
authRouter.get('/validate',validate);

export default authRouter;
