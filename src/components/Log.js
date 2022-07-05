import React from 'react';
import Button from '@mui/material/Button';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import MailIcon from '@mui/icons-material/Mail';
import './App.css';

export default function Log(props) {
  if (props.status === "ok") {
    return (
      <>
        <IconButton size="large" color="inherit">
          <Badge badgeContent={5} size="small" overlap="circular" color="error">
            <MailIcon sx={{width: 30, height: 30}} />
          </Badge>
        </IconButton>
        <IconButton size="large" color="inherit" >
          <Avatar src={props.info.img} sx={{width: 35, height: 35}} />
        </IconButton>
      </>
    )
  } else {
    return (
      <>
        <Button variant="text" disableRipple={true} onClick={() => {props.setStatus("in")}} sx={{color: '#fff', display: 'block', textTransform: "none", borderRadius: 3, mr: 1, '&:hover': {color: '#ccc', backgroundColor: '#1d3354'}}} >
          <b>Sign in</b>
        </Button>
        <Button variant="outlined" onClick={() => {props.setStatus("up")}} sx={{color: '#fff', display: 'block', textTransform: "none", borderRadius: 3, borderColor: '#fff', '&:hover': {borderColor: '#ccc', color: '#ccc', backgroundColor: '#1d3354'}}} >
          <b>Sign up</b>
        </Button>
      </>
    )
  }
};
