import React from 'react';
import GoogleIcon from '@mui/icons-material/Google';
import Button from '@mui/material/Button';

export default function Boutton(props) {
  return (
    <Button startIcon={<GoogleIcon />} variant={props.sx.v} type={props.sx.type} onClick={() => {props.click()}}
    sx={{
      color: props.sx.c,
      backgroundColor: props.sx.bc,
      display: 'flex',
      textTransform: 'none',
      justifyContent: "space-evenly",
      fontWeight: 'bold',
      textAlign: 'center',
      margin: props.sx.m,
      marginTop: props.sx.mt,
      marginBottom: props.sx.mb,
      marginLeft: props.sx.ml,
      marginRight: props.sx.mr,
      padding: props.sx.p,
      paddingTop: props.sx.pt,
      paddingBottom: props.sx.pb,
      paddingLeft: props.sx.pl,
      paddingRight: props.sx.pr,
      borderRadius: props.sx.brdr,
      borderColor: props.sx.brdc,
      width: props.sx.w,
      height: props.sx.h,
      '&:hover': {
        color: props.sx.hc,
        backgroundColor: props.sx.hbc,
        borderColor: props.sx.hbrdc,
      }
    }}>{props.sx.ph}</Button>
  )
};
