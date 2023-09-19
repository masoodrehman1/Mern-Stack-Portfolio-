import React from 'react'
import "./Projects.css"
import { Button, Typography } from '@mui/material'
import {AiOutlineProject} from "react-icons/ai"
import {Delete} from "@mui/icons-material"
import myNewImage from "../../Images/face5.jpg"
import {FaRegSmileWink} from "react-icons/fa"
const ProjectCard=({
  url, projectImage, projectTitle,description,technologies,isAdmin=false 
})=>{
  return (
    <>
    <a href={url} className='projectCard' target='black'>
    <div >
      <img src={projectImage} alt="Project" className='image'/>
      <Typography variant='h6'>{projectTitle}</Typography></div>
    <div>
      <Typography variant='h4'>About Project</Typography>
      <Typography>{description}</Typography>
      <Typography variant='h6'>My Technologies: {technologies}</Typography>
    </div>
    </a>
    {
      isAdmin && (
        <Button style={{color: "rgba(40,40,40,0.7)"}}><Delete/></Button>
      )
    }
    </>
  )
}

const Projects = () => {
const project= [1,2,3]

  return (
    <div className='projects'>
       <Typography variant='h3'>Projects <AiOutlineProject/></Typography>
       <div className="projectRapper">
        {project.map((project, index)=>(
          <ProjectCard 
          url= ""
          projectImage={myNewImage}
          projectTitle="Sample Project"
          description="this is sample project"
          technologies="React.js"
          />
        ))}
       </div>
       <Typography variant='h3' style={{font:"100 1.2rem 'Ubuntu Mono"}}> All Projects Are Created By Masood Ur Rehman<FaRegSmileWink/></Typography>
    </div>
  )
}

export default Projects