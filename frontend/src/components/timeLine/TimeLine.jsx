import React from 'react'
import Timeline from "@mui/lab/Timeline"
import TimelineItem from "@mui/lab/TimelineItem"
import TimelineSeparator from "@mui/lab/TimelineSeparator"
import TimelineConnector from "@mui/lab/TimelineConnector"
import TimelineContent from "@mui/lab/TimelineContent"
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent'
import TimelineDot from '@mui/lab/TimelineDot'
import { Event } from '@mui/icons-material'
import Typography  from '@mui/material/Typography'

const TimeLine = ({timelines=[]}) => {
  return (
    <div>
        <Timeline position='alternate'>
            {timelines.map((items, index)=>(
                <TimelineItem key={index}>
                <TimelineOppositeContent></TimelineOppositeContent>
                <TimelineSeparator>
                <TimelineConnector />
                    <TimelineDot color='primary' >
                      <Event/>
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{py:"12px ", px:2}}>
                    <Typography variant='h6'>Title</Typography>
                    <Typography>description</Typography>
                    <Typography variant='body2' color='text.secondary'>{items.description}</Typography>
                </TimelineContent> 
                </TimelineItem>            ))}
        </Timeline>
    </div>
  )
}

export default TimeLine