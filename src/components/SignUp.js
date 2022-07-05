import React, {useState, useEffect} from 'react';
import {auth} from '../firebase/firebase-config';
import {createUserWithEmailAndPassword} from 'firebase/auth'
import { setDoc, getFirestore, doc } from "firebase/firestore";
import CircularProgress from '@mui/material/CircularProgress';
import Dialog from '@mui/material/Dialog';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Button from '../lib/Button';
import Input from '../lib/Input';
import './App.css';

const db = getFirestore();

export default function SignUp(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");

  const upSign = async (event) => {
    event.preventDefault();
    setErr("ok")
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      props.setInfo({id: res.user.uid, name: name, email: email, img: ""});
      await setDoc(doc(db, "Users", res.user.uid), {name: name, service: 'Email'});
      props.setStatus("ok");
      props.setOpen(false)
    } catch (eror) {
      setErr(eror.toString().split(':')[2].split('.')[0].split('/')[1].split(')')[0]);
    }
  }

  const events = () => {
    if (err !== "ok")
      return <p style={{fontSize: 13, color: '#d62828', marginBottom: 8}}>{err}</p>
    else
      return <div style={{marginBottom: 8, justifyContent: 'center'}}><CircularProgress size={20} /></div>
  }

  useEffect(() => {
    setErr("");
  }, [name, email, password]);

  return (
    <div>
      <Dialog open={props.open} onClose={() => {props.setOpen(false); props.setStatus("ko")}} maxWidth="xs">
        <div className="dialog">
          <p style={{fontSize: 35, fontWeight: 'bold'}}>Sign up</p>
          <p style={{fontSize: 16, color: '#888', textAlign: 'center', marginTop: 20, marginBottom: 20}}>Create a free account with <br/>your email.</p>
          <Box component="form" noValidate onSubmit={upSign} sx={{flexDirection: 'column'}}>
            <Input v={name} setV={setName} sx={{ph: "Name", mb: 13, brdr: 10.5, bc: '#fff', hbrdc: '#999', pt: 8.5, pb: 6, pl: 10, pr: 10, w: 250}} />
            <Input v={email} setV={setEmail} sx={{ph: "Email", mb: 13, brdr: 10.5, bc: '#fff', hbrdc: '#999', pt: 8.5, pb: 6, pl: 10, pr: 10, w: 250}} />
            <Input v={password}setV={setPassword} sx={{type: 'password', ph: "Password", mb: 5, brdr: 10.5, bc: '#fff', hbrdc: '#999', pt: 8.5, pb: 6, pl: 10, pr: 10, w: 250}} />
            {events()}
            <Button click={() => {upSign()}} sx={{type: 'submit', ph: "Sign up", c: '#fff', bc: '#005ce6', hbc: '#0353a4', brdr: 2.5, w: '100%'}}/>
          </Box>
          <br/>
          <p style={{fontSize: 12, color: '#888', textAlign: 'center'}}>
            By continuing, you agree to our&nbsp;
            <Link href="#" underline="none" sx={{color: '#000', '&:hover': {color: '#005ce6'}}}>
              Terms of Service
            </Link>.
          </p>
          <p style={{fontSize: 12, color: '#888', textAlign: 'center'}}>
            Read our&nbsp;
            <Link href="#" underline="none" sx={{color: '#000', '&:hover': {color: '#005ce6'}}}>
            Privacy Policy
            </Link>.
          </p>
        </div>
      </Dialog>
    </div>
  );
}
