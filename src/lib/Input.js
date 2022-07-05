import React from 'react';
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

var info = {};

const Input = styled(InputBase)(({ theme }) => ({
  "& .MuiInputBase-input": {
    border: "1px solid #ced4da",
    color: info.c,
    backgroundColor: info.bc,
    display: 'block',
    textTransform: 'none',
    margin: info.m,
    marginTop: info.mt,
    marginBottom: info.mb,
    marginLeft: info.ml,
    marginRight: info.mr,
    padding: info.p,
    paddingTop: info.pt,
    paddingBottom: info.pb,
    paddingLeft: info.pl,
    paddingRight: info.pr,
    borderRadius: info.brdr,
    borderColor: info.brdc,
    width: info.w,
    height: info.h,
    '&:hover': {
      color: info.hc,
      backgroundColor: info.hbc,
      borderColor: info.hbrdc,
    },
    "&:focus": {
      borderColor: "#005ce6"
    }
  }
}));

export default function Inpout(props) {
  info = props.sx;

  const handleChange = (e) => {
    props.setV(e.target.value)
  };

  return (
    <Input placeholder={props.sx.ph} type={props.sx.type} value={props.v} onChange={handleChange} />
  )
};
