import React from 'react'
import "./Footer.css"
import { Typography } from '@mui/material'
import {Link} from "react-router-dom"
import {BsGithub, BsLinkedin, BsFacebook} from "react-icons/bs" 
const Footer = () => {
  return (
    <div className='footer'>
        <div>
    <Typography variant='h5'>About Me</Typography>
    <Typography>
        Me Mern Stack Developer. I have learned webdevelopment from YouTube and completed about 3 months Mern Stack Internship from Contour Software House, Islamabad.
    </Typography>
    <Link to="/Contact Us" className="footerContactBtn" >
        <Typography>Contact Us</Typography>
    </Link>
    </div>
    <div>
        <Typography>Social Media</Typography>
        <a href='https://github.com/masoodrehman1' target='black'>
            <BsGithub/>
        </a>
        <a href='https://www.linkedin.com/in/masood-ur-rehman-9149a6185/' target='black'>
            <BsLinkedin/>
        </a>
        <a href='https://github.com/masoodrehman1' target='black'>
            <BsFacebook/>
        </a>
    </div>
    </div>
  )
}

export default Footer