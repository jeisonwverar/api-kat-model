import {compare,hash} from "bcrypt";

const salt=10
export const  encrypt=(password)=>{
    return hash(password,salt)
};

export  const decrypt=(password,userPassword)=>{
    return compare(password,userPassword);
 };
