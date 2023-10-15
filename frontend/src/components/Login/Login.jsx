import React, { useState ,useEffect} from 'react'
import "./Login.css"
import  {Button,Typography} from "@mui/material"
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../actions/user'
import {toast } from "react-toastify"



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
        dispatch(login(adminLogin.email, adminLogin.password))
    }
    const dispatch = useDispatch()
    const {loading, message, error}=useSelector(state=>state.login)
    useEffect(() => {
      if(error){
        toast.error(error)
        dispatch({type:"CLEAR_ERRORS"})
      }
      if(message){
        toast.success(message)
        dispatch({type:"CLEAR_MESSAGE"})
      }
    
    }, [ message, error, dispatch])
    
    
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
                    <input required type="email" placeholder='Admin Email' name='email' onChange={((e)=>(adminHandler(e)))}/>
                    <input required type="password" placeholder='Admin Password' name='password' onChange={((e)=>(adminHandler(e)))}/>
                    <Button type='submit' variant='contained' disabled={loading}>Login</Button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login