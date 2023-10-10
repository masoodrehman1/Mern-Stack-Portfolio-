import "./Projects.css"
import { Button, Typography } from '@mui/material'
import {AiOutlineProject} from "react-icons/ai"
import {Delete} from "@mui/icons-material"
import {FaRegSmileWink} from "react-icons/fa"
import { deleteProject, getUser } from '../../actions/user'
import { useDispatch } from 'react-redux'
export const ProjectCard=({
  url, projectImage, projectTitle,description,technologies,isAdmin=false,id 
})=>{
  const dispatch=useDispatch()
   const deleteHandler=async(id)=>{
       await dispatch(deleteProject(id))
        dispatch(getUser())
    }
  
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
        <Button style={{color: "rgba(40,40,40,0.7)"}} onClick={()=>deleteHandler(id)}><Delete/></Button>
      )
    }
    </>
  )
}

const Projects = ({projects}) => {


  return (
    <div className='projects'>
       <Typography variant='h3'>Projects <AiOutlineProject/></Typography>
       <div className="projectRapper">
        {projects.map((item, index)=>(
          <ProjectCard 
          id={item._id}
          key={item._id}
          url= {item.url}
          projectImage= {item.image.url}
          projectTitle= {item.project}
          description= {item.description}
          technologies= {item.techStack}
          />
        ))}
       </div>
       <Typography variant='h3' style={{font:"100 1.2rem 'Ubuntu Mono"}}> All Projects Are Created By Masood Ur Rehman<FaRegSmileWink/></Typography>
    </div>
  )
}

export default Projects