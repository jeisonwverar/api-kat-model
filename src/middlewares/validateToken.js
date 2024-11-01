import { verifyToken } from "../utils/jwt.js";
import TOKEN_SECRET from "../config/jwtconfig.js";

const authRequired=async(req,res,next)=>{

        const { token } = req.cookies;

        if (!token) return res.status(401).json({ message: "No token, authorization denied" });
      
        try {
          const user = await verifyToken(token, TOKEN_SECRET);
          req.user = user;
          
          next();
        } catch (err) {
         return  res.status(403).json({ message: "Invalid token" });
        }
};
export default authRequired;