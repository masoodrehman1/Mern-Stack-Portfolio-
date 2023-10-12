import React, { useState,useEffect } from 'react'
import "./Contact.css"
import  {Button, Typography} from "@mui/material"
import { useDispatch, useSelector } from 'react-redux'
import { contactUs } from '../../actions/user'
import { success,error  } from 'react-toastify-redux'


const Contect = () => {
  const dispatch=useDispatch()
  const [contactData, setContactData ]= useState({name:"",email:"",message:""})
   const handleInputChange=(e)=>{
   setContactData({ ...contactData, [e.target.name]:e.target.value}
)   }
 const {loading,message,error:contactError}=useSelector((state)=>state.update)
  const contactFormHandler=(e)=>{
   e.preventDefault()
   dispatch(contactUs(contactData.name,contactData.email,contactData.message))
  }

  useEffect(() => {
    if(error){
      dispatch(error(contactError))
      dispatch({type:"CLEAR_ERRORS"})
    }
    if(message){
      dispatch(success(message))
        dispatch({type:"CLEAR_MESSAGE"})
      }

  
  }, [ message, contactError,dispatch])
  

  return (
    <div className='contact'>
      <div className="contactRightBar">
      </div>
      <div className="contactContainer">
        <form onSubmit={contactFormHandler} className="contactContainerForm">
          <Typography variant='h4'>Contact Us</Typography>
          
          <input required type="text"placeholder='Name' value={contactData.name} onChange={(e)=>handleInputChange(e)} name="name"/>
          <input required type="email" placeholder='Email' value={contactData.email} onChange={(e)=>handleInputChange(e)} name="email" />
          <textarea required placeholder='Massage' name="message" id="" cols="30" rows="10" value={contactData.message} onChange={(e)=>handleInputChange(e)}></textarea>
          <Button variant='contained' type='submit' disabled={loading}>Send</Button>
        </form>
      </div>
    </div>
  )
}

export default Contect