import React from 'react'
import "./About.css"
import { Typography } from '@mui/material'
const About = ({about}) => {
  return (
    
        <div className="about">
            <div className="aboutContainer">
               <Typography> {about.quote}</Typography>
            </div>
            <div className="aboutContainer2">
                <div>
                    <img src={about.avatar.url} alt="Masood Ur Rehman" className='aboutAvatar'/>
                    <Typography variant='h4' style={{
                        margin:"1vmax 0",
                        color:"black",
                    }}>{about.name}</Typography>
                    <Typography>{about.title}</Typography>
                </div>
                <div>
                    <Typography style={{
                        wordSpacing:"8px",
                        lineHeight:"20px",
                        letterSpacing:"4px",
                        textAlign:"right",
                    }}>{about.description}</Typography>
                </div>
            </div>
        </div>
    
  )
}

export default About