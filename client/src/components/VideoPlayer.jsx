import React from 'react'
import {makeStyles} from '@mui/styles'

import {Grid, Typography, Paper} from "@mui/material"
import { SocketContext  } from '../SocketContext.js';
import { useContext } from 'react';
const useStyles = makeStyles((theme) => ({
    video: {
      width: '550px',
      
    },
    gridContainer: {
      justifyContent: 'center',
      
    },
    paper: {
      padding: '10px',
      border: '2px solid black',
      margin: '10px',
    },
  }));
const VideoPlayer = () => {
    console.log("I am")
    const {
        call,
        callAccepted, 
        myVideo,
        userVideo,
        callEnded,
        stream,
        name

    } = useContext(SocketContext);
    const classes = useStyles();
  return (
    <Grid container className={classes.gridContainer}>
       
        {
             (
                <Paper className={classes.paper}>
                    <Grid item xs = {12} md = {6}>
                        <Typography variant='h5' gutterBottom>{name||'Name'}</Typography>
                        <video playsInline muted ref = {myVideo} autoPlay className={classes.video } />
                    </Grid>
                </Paper>
               
               
            )   
        }
        {
            callAccepted && !callEnded && (
                <Paper className={classes.paper}>
                    <Grid item xs = {12} md = {6}>
                        <Typography variant='h5' gutterBottom>{call.name||'Name'}</Typography>
                        <video playsInline  ref = {userVideo} autoPlay className={classes.video } />
                    </Grid>
                </Paper>
            )
        }
         
        
    </Grid>
  )
}

export default VideoPlayer