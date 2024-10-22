import { encrypt,decrypt } from '../utils/bycript.js';
import { findOne,create } from '../services/user.service.js';
import { v4 as uuidv4 } from 'uuid';
export const register=async(req,res)=>{
    const {name,email,password}= req.body;
    try {
        const userFound=await findOne({where:{email}})

        if(userFound) return  res.status(400).json({message:'the email already'});

        const passwordHash=await encrypt(password);
        const data = {user_id:uuidv4(),name,email,password:passwordHash}
      
        const registerUser=await create(data);
        if (registerUser.error) {
            return res.status(500).json({
              message: 'Error creating user',
              error: registerUser.error.parent
            });
          }
          return res.status(201).json({ message: `User successfully created email: ${registerUser.email} ` });



    } catch (error) {
        return res.status(500).json({ error: 'Internal server error' });
    }
};


export const login=(req,res)=>{
    try {
        
    } catch (error) {
       
    }
};