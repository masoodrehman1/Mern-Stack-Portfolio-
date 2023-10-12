import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  addProject, getUser,  } from '../../actions/user'
import { MdKeyboardBackspace } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { Button, Typography } from '@mui/material'
import { success,error } from 'react-toastify-redux'
// import { FaTrash } from 'react-icons/fa'
import { ProjectCard } from '../Projects/Projects'

const Project = () => {
  const { message:loginMessage}=useSelector((state)=>state.login)
    const {message,error:projectError,loading}= useSelector((state)=>state.update)
    const {user}= useSelector((state)=>state.user)
    // console.log(user)
    const dispatch=useDispatch()
    const [myProject,setMyProject]= useState({url:"",title:"",image:"",description:"", techStack:""})
    // console.log(myProject)

    const submitHandler=async(e)=>{
        e.preventDefault()
        
        await dispatch(addProject(myProject.url,myProject.title,myProject.image,myProject.description,myProject.techStack))
        dispatch(getUser())
    }
   
    useEffect(() => {
        if(error){
          dispatch(error(projectError))
          dispatch({type:"CLEAR_ERRORS"})
        }
        if(message){
          dispatch(success(message))
            dispatch({type:"CLEAR_MESSAGE"})
          }
          if(loginMessage){
            dispatch(success(loginMessage))
            dispatch({type:"CLEAR_MESSAGE"})
          }
      
      }, [message, projectError,dispatch,loginMessage])
      
 
const projectHandle=(e)=>{
  const {name,value}=e.target
  if(name==="image"){
    const file=e.target.files[0]
    const Reader=new FileReader()
    Reader.readAsDataURL(file)
    Reader.onload=()=>{
      if(Reader.readyState===2){setMyProject({...myProject, image:Reader.result})}
    }
  }else{setMyProject({...myProject, [name]:value})}

}
  return (
    <div className='adminPanel'> 
    <div className='adminPanelContainer'>
    <Typography variant='h4'>
                    <p>A</p>
                    <p>D</p>
                    <p>M</p>
                    <p>I</p>
                    <p style={{marginRight:"1vmax"}}>N</p>

                    <p>P</p>
                    <p>A</p>
                    <p>N</p>
                    <p>E</p>
                    <p>L</p>
                </Typography>
                <form onSubmit={submitHandler}>
                    {["title","url","image","description", "techStack"].map((key)=>(
                        <input
                        className='adminPanelInputs'
                        type={key==="image"?"file":key==="url"?"url":"text"}
                        placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
                        value={key==="image"?"":myProject[key]}
                        name={key}
                        onChange={(e)=>projectHandle(e)}
                        />
                    ))}
               
                <Link to="/account">Back<MdKeyboardBackspace/></Link>
                <Button type='submit' variant="contained" disabled={loading}>Add</Button>
                </form>
                <div className="adminPenalTimeline">
                    {user
                    && user.projects &&user.projects.map((item)=>(
                       <ProjectCard
                       id={item._id} 
                       key={item._id}
                       url={item.url}
                       projectImage={item.image.url}
                       projectTitle={item.title}
                       description={item.description}
                       technologies={item.techStack}
                       isAdmin={true} 
                       />
                    ))}
                </div>
              
    </div>
    </div>
  )
}



export default Project



 // const deleteHandler=(id)=>{
    //     dispatch(deleteTimeline(id))
    //     dispatch(getUser())
    // }