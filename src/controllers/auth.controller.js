import { encrypt, decrypt } from '../utils/bycript.js';
import { findOne, create } from '../services/user.service.js';
import { v4 as uuidv4 } from 'uuid';
import { generateToken, verifyToken } from '../utils/jwt.js';
export const register = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const userFound = await findOne({ where: { email } });

    if (userFound)
      return res.status(400).json({ message: 'the email already' });

    const passwordHash = await encrypt(password);
    const data = { user_id: uuidv4(), name, email, password: passwordHash };

    const registerUser = await create(data);
    if (registerUser.error) {
      return res.status(500).json({
        message: 'Error creating user',
        error: registerUser.error.parent
      });
    }
    const token = generateToken(registerUser);
    console.log(token);
    res.cookie('token', token, {
      httpOnly: true, // Solo accesible desde el servidor
      //secure: process.env.NODE_ENV === 'production', // Solo en HTTPS en producción
      secure:false,
      sameSite: 'lax', // Protección contra CSRF
      maxAge: 3600000 // Expiración en 1 hora (3600000 ms)
    });
    return res.status(201).json({
      message: `User successfully created email: ${registerUser.email} `,
      token
    });
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const userFound = await findOne({ where: { email } });
    if (!userFound) return res.status(400).json({ message: 'User not found' });
    const isMatch = await decrypt(password, userFound.password);
    if (!isMatch)
      return res.status(404).json({ message: 'Incorrect password' });
    const token = generateToken(userFound);
    res.cookie('token', token, {
      httpOnly: true, // Solo accesible desde el servidor
      //secure: process.env.NODE_ENV === 'production', // Solo en HTTPS en producción
      secure:false,
      sameSite: 'lax', // Protección contra CSRF
      maxAge: 3600000 // Expiración en 1 hora (3600000 ms)
    });

    return res
      .status(200)
      .json({ user: { email: userFound.email, role: userFound.role }, token });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const logout = async (req, res) => {
  try {
    await res.cookie('token', '', {
      expires: new Date(0)
    });

    return res.sendStatus(200);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const validate = async (req, res) => {
  const token = req.cookies.token;
  try {
    if (!token) return res.status(401).json({ message: 'unauthorized' });
    const decoded = verifyToken(token);
    const user = await findOne({ where: { email: decoded.email } });
    if (!user) return res.status(404).json({ message: 'user not found ' });

    return res
      .status(200)
      .json({ user: { email: user.email, role: user.role } });
  } catch (error) {
    res.status(401).json({ message: 'Invalid or expired token' });
  }
};
