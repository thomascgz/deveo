import React, { useState } from 'react';
import { Route, Routes } from "react-router-dom";
import Error from './Error';
import AppBar from './AppBar';
import Footer from './Footer';
import Body from './Body';
import './App.css';

export default function App() {
  const [info, setInfo] = useState({id: "", name: "", mail: "", img: ""});
  const [status, setStatus] = useState("ko");

  const hub = str => (
    <div className="hub">
      <div>
        <AppBar status={status} setStatus={setStatus} info={info} setInfo={setInfo} />
      </div>
        <Body status={status} setStatus={setStatus} info={info} setInfo={setInfo} />
      <div>
        <Footer />
      </div>
    </div>
  )

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={hub('')}/>
        <Route exact path="/monlove" element={hub('mimi')}/>
      </Routes>
    </div>
  );
}
