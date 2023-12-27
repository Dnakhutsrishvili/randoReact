import * as React from 'react';
import IconButton from '@mui/icons-material/Send';

export default function IconLabelButtons(props) {
  return (
 <div>
      <IconButton type="submit" sx={
        {cursor:"pointer" ,position:"absolute", right:"0",marginTop:"-40px",marginRight:"24px"}
      } onClick={()=>{props.send()}} aria-label="send" disabled color="primary"/>

 </div>

  );
}