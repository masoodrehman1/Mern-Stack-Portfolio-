import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTimeline, deleteTimeline, getUser,  } from '../../actions/user'
import { MdKeyboardBackspace } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { Button, Typography } from '@mui/material'
import { FaTrash } from 'react-icons/fa'
import { toast} from 'react-toastify';

const Timeline = () => {
    const {message,error,loading}= useSelector((state)=>state.update)
    const {user}= useSelector((state)=>state.user)
    const dispatch=useDispatch()
    const [timeline,setTimeline]= useState({title:"",description:"", date:""})
    console.log(timeline)
    const submitHandler=async(e)=>{
        e.preventDefault()
        await dispatch(addTimeline(timeline.title,timeline.description,timeline.date))
        dispatch(getUser())
    }
    const deleteHandler=(id)=>{
        dispatch(deleteTimeline(id))
        dispatch(getUser())
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
       
      
      }, [message, error,dispatch])
      
const timelineHandle=(e)=>{
setTimeline({...timeline, [e.target.name]:e.target.value})
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
                    {["title","description", "date"].map((key)=>(
                        <input
                        className='adminPanelInputs'
                        type={key==="date"?"date":"text"}
                        placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
                        value={timeline[key]}
                        name={key}
                        onChange={(e)=>timelineHandle(e)}
                        required={true}
                        />
                    ))}
               
                <Link to="/account">Back<MdKeyboardBackspace/></Link>
                <Button type='submit' variant="contained" disabled={loading}>Add</Button>
                </form>
                <div className="adminPenalTimeline">
                    {user&&user.timeline&&user.timeline.map((item)=>(
                        <div className='timelineCard' key={item._id}>
                            <Typography variant='h6'>{item.title}</Typography>
                            <Typography variant='body1' style={{letterSpacing:"2px"}}>{item.description}</Typography>
                            <Typography variant='body1' style={{fontWeight:600}}>{item.date.toString().split("T")[0]}</Typography>
                            <Button style={{margin:"auto", display:"block",color:"rgba(40,40,40,0.7)"}}
                            onClick={()=>deleteHandler(item._id)}
                            ><FaTrash/></Button>
                        </div>
                    ))}
                </div>
              
    </div>
    </div>
  )
}

export default Timeline;
