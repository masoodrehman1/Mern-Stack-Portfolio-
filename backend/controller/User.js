import {User} from "../model/User.js"
import jwt  from "jsonwebtoken"


export const login= async (req,res)=>{
  try {
    const {email, password}=req.body
    const user= await User.findOne({email,password})
    if(!user){
        return res.status(400).json({
            success:false,
            massage:"Invalid Email or Password"     
        })
    }
    const token = jwt.sign({_id:user._id},process.env.JWT_SECRET)
    res.status(200),cookie("token",token,{
        expire:new Date(Date.now()+ 600000),
        httpOnly:true
    }).json({
        success:true,
        massage:"logged In Successfuly"
    })
  } catch (error) {
    return res.status(400).json({
        success:false,
        massage:error.massage      
    })
     
  }
}



export const logout= async (req,res)=>{
    try {
    
      res.status(200),cookie("token",null,{
          expire:new Date(Date.now()),
          httpOnly:true
      }).json({
          success:true,
          massage:"logged Out Successfuly"
      })
    } catch (error) {
      return res.status(400).json({
          success:false,
          massage:error.massage      
      })
       
    }
  }

  export const getUser= async (req, res)=>{
    try {
        const user= User.findOne().select("-email -password")
        res.status(200).json({
            success:true,
            user,
        })
    } catch (error) {
        return res.status(400).json({
            success:false,
            massage:error.massage
        })
    }
  }