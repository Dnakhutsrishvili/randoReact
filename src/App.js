import { useState } from "react";
import ChatPage from "./components/ChatPage";
import {socket} from "./socket"
import { Button } from "@mui/material";
import HideOnScroll from "./components/HideOnScroll";

function App() {
 const [startChatState,setStartChatState]= useState(true)

  const handleStartChat = () => {
    socket.emit('startChat');
  };

  return (
      <div>
      <HideOnScroll></HideOnScroll>
       <ChatPage chatStartState={setStartChatState}></ChatPage>
     {startChatState && <Button
        onClick={handleStartChat}
        style={{marginLeft:"20px"}}
        color="secondary"
        size="large"
        variant="outlined"
>მოძებნე პარტნიორი</Button>}
      </div>
        );
}


export default App;
