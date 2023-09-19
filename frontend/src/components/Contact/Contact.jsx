import React, { useState } from 'react'
import "./Contact.css"
import  {Button, Typography} from "@mui/material"


const Contect = () => {
  const [contactData, setContactData ]= useState({Name:"",Email:"",Massage:""})
   const handleInputChange=(e)=>{
   setContactData({ ...contactData, [e.target.name]:e.target.value}
)   }
  return (
    <div className='contact'>
      <div className="contactRightBar">
      </div>
      <div className="contactContainer">
        <form action="" className="contactContainerForm">
          <Typography variant='h4'>Contact Us</Typography>
          <input required type="text"placeholder='Name' value={contactData.Name} onChange={(e)=>(handleInputChange)} name="Name"/>
          <input required type="email" placeholder='Email' value={contactData.Email} onChange={(e)=>(handleInputChange)} name="Email" />
          <textarea required placeholder='Massage' name="Massage" id="" cols="30" rows="10" value={contactData.Massage} onChange={(e)=>(handleInputChange)}></textarea>
          <Button variant='contained' type='submit'>Send</Button>
        </form>
      </div>
    </div>
  )
}

export default Contect