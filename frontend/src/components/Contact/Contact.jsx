import React, { useState,useEffect } from 'react'
import "./Contact.css"
import  {Button, Typography} from "@mui/material"
import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert'
import { contactUs } from '../../actions/user'


const Contect = () => {
  const dispatch=useDispatch()
  const alert=useAlert()
  const [contactData, setContactData ]= useState({name:"",email:"",message:""})
   const handleInputChange=(e)=>{
   setContactData({ ...contactData, [e.target.name]:e.target.value}
)   }
 const {loading,message,error}=useSelector((state)=>state.update)
  const contactFormHandler=(e)=>{
   e.preventDefault()
   dispatch(contactUs(contactData.name,contactData.email,contactData.message))
  }

  useEffect(() => {
    if(error){
      alert.error(error)
      dispatch({type:"CLEAR_ERRORS"})
    }
    if(message){
        alert.success(message)
        dispatch({type:"CLEAR_MESSAGE"})
      }

  
  }, [alert, message, error,dispatch])
  

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