import { User } from "../model/User.js";
import jwt  from "jsonwebtoken";

export const isauthenticated=async(req, res, next)=>{
    try {
        const {token} =req.cookies
        if(!token){
            return res.status(400).json({
                success:false,
                massage:"Please Login To Visit My portfolio Details"
            })
        }
        const decode = jwt.verify(token, process.env.JWT_SECRET)
    } catch (error) {
        return res.status(400).json({
            success:false,
            massgae: error.massage
        })
        
    }
}