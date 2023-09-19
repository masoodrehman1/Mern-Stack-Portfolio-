import React from 'react'
import "./About.css"
import { Typography } from '@mui/material'
import myPic from "../../Images/mypic3.jpeg"

const About = () => {
  return (
    
        <div className="about">
            <div className="aboutContainer">
               <Typography> This is Mern Stack Portfolio Created By Masood Ur Rehman</Typography>
            </div>
            <div className="aboutContainer2">
                <div>
                    <img src={myPic} alt="Masood Ur Rehman" className='aboutAvatar'/>
                    <Typography variant='h4' style={{
                        margin:"1vmax 0",
                        color:"black",
                    }}>Masood Ur Rehman</Typography>
                    <Typography>Mern Stack Developer</Typography>
                </div>
                <div>
                    <Typography style={{
                        wordSpacing:"5px",
                        lineHeight:"20px",
                        letterSpacing:"5px",
                        textAlign:"right",
                    }}>I'm a dedicated MERN stack developer with a passion for transforming innovative concepts into fully functional web applications. My journey in web development began with a strong foundation in JavaScript and React, which allows me to craft responsive and user-friendly front-end interfaces. On the back end, I'm proficient in Node.js, Express.js, and MongoDB, enabling me to design scalable and efficient server-side solutions.</Typography>
                </div>
            </div>
        </div>
    
  )
}

export default About