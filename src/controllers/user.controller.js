import { findAll } from "../services/user.service.js";

export const getUser = (req, res) => {
    const {id}=req
  res.send(`user found: ${id}`);
};
export const getAll =async (_, res) => {
    try {
        const users= await findAll();
       return  res.json(users)
    } catch (error) {
        return res.status(404).json({message:'not found user'})
    }
};
export const getUpdate = (req, res) => {
  res.send(`user found: ${id} - ${data}`);
};
export const getCreate = (req, res) => {
  console.log(`user found: ${id} - ${data}`);
};
export const getDelete = (req, res) => {
  console.log('userdelete');
};
