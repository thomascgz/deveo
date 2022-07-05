import React, {useState, useEffect} from 'react';
import { getAuth, GoogleAuthProvider, GithubAuthProvider, signInWithPopup } from "firebase/auth";
import { getDoc, setDoc, getFirestore, doc } from "firebase/firestore";
import Dialog from '@mui/material/Dialog';
import Link from '@mui/material/Link';
import Button from '../lib/Button';
import ButtonGoogle from '../lib/ButtonGoogle';
import ButtonGithub from '../lib/ButtonGithub';
import './App.css';

const db = getFirestore();

const auth = getAuth();

const providerGoogle = new GoogleAuthProvider();

const providerGithub = new GithubAuthProvider();

export default function Sign(props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (props.status !== "ko")
      setOpen(true)
  }, [props.status]);

  const checkIn = async (uid, name, service) => {
    try {
      const ref = doc(db, "Users", uid);
      const docSnap = await getDoc(ref);
      if (docSnap.exists()) {
        ;
      } else {
        await setDoc(doc(db, "Users", uid), {name: name, service: service});
      }
    } catch (err) {console.log(err)}
  }

  const signWithGoogle = async () => {
    try {
      const res = await signInWithPopup(auth, providerGoogle)
      props.setInfo({id: res.user.uid, name: res.user.displayName, email: res.user.email, img: res.user.photoURL});
      checkIn(res.user.uid, res.user.displayName, 'Google')
      props.setStatus("ok");
      props.setOpen(false)
    } catch (err) {console.log(err)}
 };

 const signWithGithub = async () => {
   try {
     const res = await signInWithPopup(auth, providerGithub)
     props.setInfo({id: res.user.uid, name: res.user.displayName, email: res.user.email, img: res.user.photoURL});
     checkIn(res.user.uid, res.user.displayName, 'Github')
     props.setStatus("ok");
     props.setOpen(false)
   } catch (err) {console.log(err)}
};

  return (
    <div>
      <Dialog open={open} onClose={() => {setOpen(false); props.setStatus("ko")}} maxWidth="xs">
        <div className="dialog">
          <p style={{fontSize: 35, fontWeight: 'bold'}}>Hello!</p>
          <p style={{fontSize: 16, color: '#888', textAlign: 'center', margin: 20}}>Use your email or another service to <br/>continue with Deveo.</p>
          <ButtonGoogle click={() => {signWithGoogle()}} sx={{ph: "Continue with Google", mb: 1.5, v: "text", c: '#000', pr: 5.6, bc: '#e9ecef', hbc: '#dee2e6', brdr: 2.5, w: '100%'}}/>
          <ButtonGithub click={() => {signWithGithub()}} sx={{ph: "Continue with Github", mb: 1.5, v: "text", c: '#000', pr: 5.6, bc: '#e9ecef', hbc: '#dee2e6', brdr: 2.5, w: '100%'}}/>
          <Button click={() => {setOpen(false); props.setOpen(true)}} sx={{ph: "Continue with Email", v: "text", c: '#fff', bc: '#005ce6', hbc: '#0353a4', brdr: 2.5, w: '100%'}}/>
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
