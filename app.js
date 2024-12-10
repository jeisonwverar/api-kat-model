import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import routerMain from './src/routes/index.js';
import cookieParser from 'cookie-parser';

const app = express();
// middleware
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173',
  credentials:true
}));

app.use(morgan('dev'));
app.use(cookieParser());
app.get('/', (_, res) => {
  res.send('<h1>server</h1>');
});

//route

app.use('/api/v1', routerMain);
export default app;
