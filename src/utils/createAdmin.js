import User from '../models/userModels.js';
import { encrypt } from './bycript.js';
import { v4 as uuidv4 } from 'uuid';
const createAdmin = async () => {
  try {
    const adminExists = await User.findOne({ where: { name: 'admin' } });
    if (adminExists) {
      console.log('Admin user already exists');
      return;
    }
    const password = await encrypt('123456');
    await User.create({
      user_id: uuidv4(),
      name: 'admin',
      email: 'admin@gmail.com',
      password, // Cambia esto en producción por una contraseña segura
      role: 'admin'
    });

    console.log('Admin user created successfully');
  } catch (error) {
    console.error('Error creating admin user:', error);
  }
};

export default createAdmin;
