import React, { useState } from 'react'
import "./Login.css"
import  {Button,Typography} from "@mui/material"


const Login = () => {
    const [adminLogin, setAdminLogin] = useState({
        email:"",
        password:"",
    })
    const adminHandler=(e)=>{
        setAdminLogin({...adminLogin, [e.target.name]: e.target.value})
    }
    const submitHandler=(e)=>{
        e.preventDefault()
    }
  return (
    <div className='login'>
        <div className="loginContainer">
            <form action="" className="loginForm" onSubmit={submitHandler}>
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
                <div>
                    <input required type="email" placeholder='Admin Email' name='email' onChange={((e)=>(adminHandler))}/>
                    <input required type="password" placeholder='Admin Password' name='Password' onChange={((e)=>(adminHandler))}/>
                    <Button type='submit' variant='contained'>Login</Button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login