import React, { useEffect,  } from 'react'
import "./AdminPanel.css"
import { Button, Typography } from '@mui/material'
import {AiOutlineProject} from "react-icons/ai"
import {MdTimeline} from "react-icons/md"
import {FaYoutube} from "react-icons/fa"
import {Link} from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import {logout, updateUser} from "../../actions/user"
import { toast} from 'react-toastify';
import {updateAdminData  } from "../../Reducers/stateData"



const AdminPanel = () => {
    const dispatch=useDispatch()
    
    const { message:loginMessage}=useSelector((state)=>state.login)
    const {message,error,loading}= useSelector((state)=>state.update)
    const adminData = useSelector((state) => state.adminData);

 const submitHandler=(e)=>{
    e.preventDefault()
    dispatch(updateUser(adminData.name,adminData.email, adminData.password,adminData.skills,adminData.about))
 }
 const logoutHandler=()=>{
      dispatch(logout())
 }
 const handleAboutImage=(e)=>{
    const reader= new FileReader()
    reader.readAsDataURL(e.target.files[0])
    reader.onload=()=>{
    if(reader.readyState===2){
        dispatch(updateAdminData({ about: { ...adminData.about, avatar: reader.result }}))
    }
    }
 }
 const handleImage=(e,val)=>{
    const reader= new FileReader()
    reader.readAsDataURL(e.target.files[0])
    reader.onload=()=>{
    if(reader.readyState===2){

        dispatch(updateAdminData({skills : {...adminData.skills, [`image${val}`]:reader.result}}))}
        
       
    }
 }
const adminHandler=(e)=>{
    dispatch(updateAdminData({[e.target.name]:e.target.value}))
}
const handleAbout=(e)=>{
    dispatch(updateAdminData({...adminData, about:{...adminData.about, [e.target.name]:e.target.value}}))
}
useEffect(() => {
    if(error){
        toast.error(error)
      dispatch({type:"CLEAR_ERRORS"})
    }
    if(message){
        toast.success(message)
        dispatch({type:"CLEAR_MESSAGE"})
      }
    if(loginMessage){
        toast.success(loginMessage)
      dispatch({type:"CLEAR_MESSAGE"})
    }
  
  }, [ message, error, loginMessage,dispatch])
  
  
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
                    {["name","email", "password"].map((key)=>(
                        <input
                        className='adminPanelInputs'
                        type={key==="password"?"password":"text"}
                        placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
                        value={adminData[key]}
                        name={key}
                        onChange={(e)=>adminHandler(e)}
                        
                        />
                    ))}
                <div className='adminPanelSkill'>
                    {[1,2,3,4,5,6].map((val)=>(
                        <div key={val}>
                            <Typography>SKILL {val}</Typography>
                            <input type="file" className="adminPanelFile" accept='image/*'
                            onChange={(e)=>handleImage(e,val)}/>
                        </div>
                    ))}
                    
                </div>
                <div className='adminPanelAbout'>
                    <fieldset>
                        <legend>About</legend>
                        {Object.entries(adminData.about).map(([key,value])=>(
                            <input type={key==="avatar"? "file":"text"} key={key} placeholder={key.charAt(0).toUpperCase() +key.slice(1)}
                             value={key==="avatar"? "":value} name={key}
                             onChange={(e)=>{key==="avatar"? handleAboutImage(e): handleAbout(e)}}
                             accept={key==="avatar"? "image/*": undefined}
                             className='adminPanelInputs'
                             />
                        ))}
                       
                    </fieldset>
                </div>
                <Link to="/admin/timeline">TIMELINE<MdTimeline/></Link>
                <Link to="/admin/youtube">YOUTUBE<FaYoutube/></Link>
                <Link to="/admin/project">PROJECT<AiOutlineProject/></Link>
                <Button type='submit' variant="contained" disabled={loading}>Update</Button>
                </form>
                <Button variant='contained' color='error' style={{display:"block", margin:"4vmax auto"}} 
                onClick={logoutHandler}>Logout</Button>
    </div>
    </div>
  )
}

export default AdminPanel
