import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function FullWidthTextField(props) {
  const sendHandler=()=>{
    props.send()  }

  return (
    <Box
      sx={{
        maxWidth: '100%',
        paddingLeft:"20px",
        paddingRight:"20px"

      }}
    >
      <TextField   onKeyDown={(e) => (
    e.keyCode === 13 ? sendHandler(e) : null
  )} value={props.message} onChange={(e)=>{ props.setMessage(e.target.value)}}fullWidth label="ტექსტი" id="fullWidth" />
    </Box>
  );
}