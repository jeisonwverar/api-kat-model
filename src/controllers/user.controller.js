import { v4 as uuidv4 } from 'uuid';
import { findAll, findForId,create } from '../services/user.service.js';

export const getUser = async (req, res) => {
  const id = req.params.id;
  let response = null;
  try {
    if (!id) {
      response = await findAll();
    } else {
      response = await findForId(id);
    }

    if (!response) {
      return res.status(404).json({ message: 'NOT FOUND' });
    }

    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ message: 'Error en server', error });
  }
};

export const getUpdate = (req, res) => {
  res.send(`user found: ${id} - ${data}`);
};
export const CreateUser = async (req, res) => {
  const body =  req.body;
  try {
   const data={user_id:uuidv4(),...body}

    const response = await create(data)
    if(response.error){
      return res.status(500).json({ message: 'Error al crear el usuario', error: response.error.parent.detail })
    }
     return res.status(201).json({message:`User create success name user ${response.name} `}) 
  
   } catch (error) {
     return res.status(500).json(error)
   }
};
export const getDelete = (req, res) => {
  console.log('userdelete');
};
