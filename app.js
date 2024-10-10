import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
const app = express();
// middleware
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extends: false }));
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send('<h1>server</h1>');
});

export default app;
