import { Router } from 'express';
import {
  
} from '../controllers/image.controller.js';

const routerImage = Router();

routerImage.get('/image/:id?', (req, res) => {
  const { id } = req.params;
  console.log(id);
  if (id) {
    return res.send(`<h1> el id : ${id}</h1>`);
  } else {
    return res.send('<h1>image get</h1>');
  }
});
routerImage.post('/image');
routerImage.put('/image');
routerImage.delete('/image/:id');

export default routerImage;
