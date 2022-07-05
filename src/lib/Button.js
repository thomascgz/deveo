import React from 'react';
import Button from '@mui/material/Button';

export default function Boutton(props) {
  return (
    <Button variant={props.sx.v} type={props.sx.type} onClick={() => {props.click()}}
    sx={{
      color: props.sx.c,
      backgroundColor: props.sx.bc,
      display: 'block',
      textTransform: 'none',
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
