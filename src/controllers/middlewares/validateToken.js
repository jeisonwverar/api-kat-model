import { verifyToken } from "../../utils/jwt.js";
import TOKEN_SECRET from "../../config/jwtconfig.js";
const {token}=req.cookies;
if(!token)return res.status(401).json({message:'No token ,authorization denied'})


    export const authRequired=(req,res,next)=>{

        const {token}=req.cookies;
        if(!token)return res.status(401).json({message:'No token ,authorization denied'})
        
        
        verifyToken(token,TOKEN_SECRET,(err,user)=>{
            if(err)return res.status(403).json({message:"Invalid token"});
            
              req.user=user;
        });
        
        next();
        
        };