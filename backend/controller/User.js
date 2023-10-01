import { sendMail } from "../meddlewares/sendMail.js"
import {User} from "../model/User.js"
import jwt  from "jsonwebtoken"
import cloudinary from "cloudinary"

export const login= async (req,res)=>{
  try {
    const {email, password}=req.body
    console.log(req.body)
    const user= await User.findOne({email,password})
    console.log(user);
    if(!user){
        return res.status(400).json({
            success:false,
            message:"Invalid Email or Password"     
        })
    }
    const token = jwt.sign({_id:user._id},process.env.JWT_SECRET)
    res.cookie("token",token,{
        expire:new Date(Date.now()+ 600000),
        httpOnly:true,
        
    }) 
    res.status(200).json({
        success: true,
        message: 'Logged In Successfully',
      });
  } catch (error) {
    return res.status(400).json({
        success:false,
        message:error.message      
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
          message:"logged Out Successfuly"
      })
    } catch (error) {
      return res.status(400).json({
          success:false,
          message:error.massage      
      })
       
    }
  }

  export const getUser= async (req, res)=>{
    try {
        const user=await User.findOne().select("-email -password")
        res.status(200).json({
            success:true,
            user,
        })
    } catch (error) {
        return res.status(400).json({
            success:false,
            message:error.message
        })
    }
  }
  export const myProfile= async (req, res)=>{
    try {
        const user=await User.findById(req.user._id)
        if(!user){
            res.status(400).json({
                success:false,
                message:"User not found"
            })
        }
        res.status(200).json({
            success:true,
            user,
        })
    } catch (error) {
        return res.status(400).json({
            success:false,
            message:error.message
        })
    }
  }
  export const contact= async (req, res)=>{
    try {
        const {name, email, massage}=req.body
        const userMassage=` my name is ${name}. My email is ${email}. I want to say that ${massage}.`
        await sendMail(userMassage)
        return res.status(200).json({
            success:true,
            message:"message sent successfuly"
        })
    } catch (error) {
        return res.status(400).json({
            success:false,
            message:error.message
        })
    }
  }
  export const updateUser= async (req, res)=>{
    try {
        const user=await User.findById(req.user._id)
        console.log(user);
        if (!user) {
            return res.status(404).json({
              success: false,
              message: "User not found",
            });
          }

        const {name,email, password,skills, about}=req.body
        if(name){
            user.name=name
        }
        if(email){
            user.email=email
        }
        if(password){
            user.password=password
        }
        if(skills){
           if(skills.image1){
            await cloudinary.v2.uploader.destroy(user.skills.image1.public_id)
            const myCloud=await cloudinary.v2.uploader.upload(skills.image1,{folder:"portfolio"})
            user.skills.image1={
                public_id:myCloud.public_id,
                url:myCloud.secure_url
            }
           }
           if(skills.image2){
            await cloudinary.v2.uploader.destroy(user.skills.image2.public_id)
            const myCloud=await cloudinary.v2.uploader.upload(skills.image2,{folder:"portfolio"})
            user.skills.image2={
                public_id:myCloud.public_id,
                url:myCloud.secure_url
            }
           }
           if(skills.image3){
            await cloudinary.v2.uploader.destroy(user.skills.image3.public_id)
            const myCloud=await cloudinary.v2.uploader.upload(skills.image3,{folder:"portfolio"})
            user.skills.image3={
                public_id:myCloud.public_id,
                url:myCloud.secure_url
            }
           }
           if(skills.image4){
            await cloudinary.v2.uploader.destroy(user.skills.image4.public_id)
            const myCloud=await cloudinary.v2.uploader.upload(skills.image4,{folder:"portfolio"})
            user.skills.image4={
                public_id:myCloud.public_id,
                url:myCloud.secure_url
            }
           }
           if(skills.image5){
            await cloudinary.v2.uploader.destroy(user.skills.image5.public_id)
            const myCloud=await cloudinary.v2.uploader.upload(skills.image5,{folder:"portfolio"})
            user.skills.image5={
                public_id:myCloud.public_id,
                url:myCloud.secure_url
            }
           }
           if(skills.image6){
            await cloudinary.v2.uploader.destroy(user.skills.image6.public_id)
            const myCloud=await cloudinary.v2.uploader.upload(skills.image6,{folder:"portfolio"})
            user.skills.image6={
                public_id:myCloud.public_id,
                url:myCloud.secure_url
            }
           }
        }
        if(about){
            user.about.name=about.name
            user.about.title=about.title
            user.about.description=about.description
            user.about.quote=about.quote
            if(about.avatar){
                await cloudinary.uploader.destroy(user.about.avatar.public_id)
                const myCloud = await cloudinary.uploader.upload(about.avatar,{
                    folder:"portfolio"
                })
                user.about.avatar={
                    public_id:myCloud.public_id,
                    url:myCloud.secure_url
                }
            }
        }
        await user.save()
        res.status(200).json({
            success:true,
            message:"user updated successfully",
        })
    } catch (error) {
        return res.status(400).json({
            success:false,
            message:error.message
        })
    }
  }

  export const addTimeline= async (req, res)=>{
    try {
        const {title, description,date}=req.body
        const user=await User.findById(req.user._id)
        user.timeline.unShift({
            title, description,date
        })
        await user.save()
        res.status(200).json({
            success:true,
            message:"added to timeline",
        })
    } catch (error) {
        return res.status(400).json({
            success:false,
            message:error.message
        })
    }
  }
  export const addYoutube= async (req, res)=>{
    try {
        const {url,title, image}=req.body
        const user=await User.findById(req.user._id)
const myCloud= await cloudinary.v2.uploader.upload(image,{folder:"portfolio"})

        user.youtube.unShift({
            url,
            title,
            image:{
                public_id:myCloud.public_id,
                url:myCloud.secure_url
            }
        })
        await user.save()
        res.status(200).json({
            success:true,
            message:"Added To Youtube",
        })
    } catch (error) {
        return res.status(400).json({
            success:false,
            message:error.message
        })
    }
  }
  export const addProject= async (req, res)=>{
    try {
        const {url,title, image,description,techStack}=req.body
        const user=await User.findById(req.user._id)
const myCloud= await cloudinary.v2.uploader.upload(image,{folder:"portfolio"})

        user.projects.unShift({
            url,
            title,
            description,
            techStack,
            image:{
                public_id:myCloud.public_id,
                url:myCloud.secure_url
            }
        })
        await user.save()
        res.status(200).json({
            success:true,
            message:"Added To Projects",
        })
    } catch (error) {
        return res.status(400).json({
            success:false,
            message:error.message
        })
    }
  }
  export const deleteTimeline= async (req, res)=>{
    try {

        const {id}=req.params
        const user=await User.findById(req.user._id)
        user.timeline= user.timeline.filter((item)=> item._id!==id)


        await user.save()
        res.status(200).json({
            success:true,
            message:"Deleted From timeline",
        })
    } catch (error) {
        return res.status(400).json({
            success:false,
            message:error.message
        })
    }
  }
  export const deleteYoutube= async (req, res)=>{
    try {

        const {id}=req.params
        const user=await User.findById(req.user._id)

        const video= user.youtube.filter((item)=> item._id===id)
        await cloudinary.v2.uploader.destroy(video.image.public_id)
        
        user.youtube= user.youtube.filter((item)=> item._id!==id)
        await user.save()
        res.status(200).json({
            success:true,
            message:"Deleted From Youtube",
        })
    } catch (error) {
        return res.status(400).json({
            success:false,
            message:error.message
        })
    }
  }
  export const deleteProject= async (req, res)=>{
    try {

        const {id}=req.params
        const user=await User.findById(req.user._id)

        const project= user.projects.filter((item)=> item._id===id)
        await cloudinary.v2.uploader.destroy(project.image.public_id)
        
        user.projects= user.projects.filter((item)=> item._id!==id)
        await user.save()
        res.status(200).json({
            success:true,
            message:"Deleted From Projects",
        })
    } catch (error) {
        return res.status(400).json({
            success:false,
            message:error.message
        })
    }
  }