import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import userRoutes from './src/routes/user.routes.js';
const app = express();
// middleware
app.use(express.json());
app.use(cors());

app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send('<h1>server</h1>');
});

//route

app.use('/api/v1/',userRoutes)

export default app;
