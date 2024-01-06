import { useState } from "react";
import ChatPage from "./components/ChatPage";
import {socket} from "./socket"

import HideOnScroll from "./components/HideOnScroll";
import WelcomeScreen from "./components/WelcomeScreen";

function App() {
 const [startChatState,setStartChatState]= useState(true)

  const handleStartChat = () => {
    socket.emit('startChat');
  };

  return (
      <div>
     
      <HideOnScroll></HideOnScroll>
      {startChatState && <WelcomeScreen handleStartChat={handleStartChat} ></WelcomeScreen>}
       <ChatPage chatStartState={setStartChatState}></ChatPage>
    
      </div>
        );
}


export default App;
