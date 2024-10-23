import jwt from 'jsonwebtoken';
import TOKEN_SECRET from '../config/jwtconfig.js';
export const generateToken = (user) => {
  return jwt.sign(
    { id: user.id, email: user.email, role: user.role },TOKEN_SECRET,
    {
      expiresIn: '2h'
    }
  );
};

export const verifyToken = (token) => {
  try {
    return jwt.verify(token, TOKEN_SECRET);
  } catch (error) {
    return null;
  }
};
