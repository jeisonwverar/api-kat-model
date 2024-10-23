import dotenv from 'dotenv';
dotenv.config();

const TOKEN_SECRET = process.env.TOKEN_SECRET || 'secretkey';

export default TOKEN_SECRET;
