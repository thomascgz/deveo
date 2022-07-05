import React from 'react';
import Avatar from '@mui/material/Avatar';
import './App.css';

export default function Footer(props) {
  return (
    <div className="footer">
      <Avatar src="./deveo.png" sx={{ width: 30, height: 30}} />
      <br/>
      <p style={{fontSize: 13, color: '#aaa'}}>© 2022 Deveo, tous droits réservés</p>
    </div>
  );
}
