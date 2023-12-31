import { User } from "../model/User.js";
import jwt  from "jsonwebtoken";

export const isauthenticated=async(req, res, next)=>{
    try {
        const {token} =req.cookies
        if(!token){
            return res.status(400).json({
                success:false,
                message:"Please Login To Visit My portfolio Details"
            })
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const user=await User.findById(decoded._id)
        req.user=user
        next();
    } catch (error) {
        return res.status(400).json({
            success:false,
            message: error.message
        })
        
    }
}