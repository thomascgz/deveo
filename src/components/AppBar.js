import React, {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Avatar from '@mui/material/Avatar';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Sign from './Sign';
import Log from './Log';
import './App.css';

export default function Appbar(props) {
  const [open, setOpen] = useState(false);

  const sign = () => {
    if (props.status === "in")
      return (
        <>
          <Sign setOpen={setOpen} setStatus={props.setStatus} info={props.info} setInfo={props.setInfo} />
          <SignIn open={open} setOpen={setOpen} setStatus={props.setStatus} info={props.info} setInfo={props.setInfo} />
        </>
      )
    else if (props.status === "up")
      return (
        <>
          <Sign setOpen={setOpen} setStatus={props.setStatus} info={props.info} setInfo={props.setInfo} />
          <SignUp open={open} setOpen={setOpen} setStatus={props.setStatus} info={props.info} setInfo={props.setInfo} />
        </>
      )
  }

  return (
    <AppBar position="static" sx={{backgroundColor: '#1d3354', height: '100%', justifyContent: 'flex-start'}}>
      <Toolbar sx={{justifyContent: 'space-between', mx: 0, alignItems: 'center'}}>
        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', width: '8%',justifyContent: 'space-between'}}>
          <div className="avatar" style={{display: 'flex'}}><Avatar src="./deveo.png" sx={{width: 45, height: 45}} /></div>
        </div>
        {sign()}
        
        <Box sx={{display: 'flex'}}>
          <Log status={props.status} info={props.info} setStatus={props.setStatus}/>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
