import { useState,useEffect ,useRef} from "react";
import { socket } from "../socket";
import MessageForm from "./MessageForm"
import IconLabelButtons from "./IconLabelButtons";
import classes from "./ChatPage.module.css"

const ChatPage = (props) => {
  const [username, setUsername] = useState('');
  const [text, setText] = useState('');
  const [roomState, setRoomState] = useState(false);
  const [room, setRoom] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
    const divRef = useRef(null);
  
    useEffect(() => {
      if(messages.length>0){
        divRef.current.scrollIntoView();

      }
    },[messages]);
  socket.on('privateMessage', ({ sender, message,time }) => {
        setMessages([...messages, { sender, message,time }]);
      });
  const handleSendMessage = () => {
    let time=new Date(new Date().getTime() + 4*60*60*1000).toLocaleTimeString();
    socket.emit('privateMessage', { room, message,time});
    setMessage('');
  };

  useEffect(() => {
    socket.on('assignedUsername', (assignedUsername) => {
      setUsername(assignedUsername);
    });
    socket.on("clearChat",()=>{
      setText('პარტნიორი გაითიშა');
      props.chatStartState(true)
      setRoomState(false)
      setMessages([])
    })
    socket.on('chatStarted', ({ room }) => {
      props.chatStartState(false)
      setRoom(room);
      setRoomState(true)
      setText('ჩათი დაიწყო');
    });
    socket.on('noAvailableUsers', () => {
      setText('მიმდინარეობს პარტნიორის ძიება');
      setRoomState(false)

    });
    socket.on('chatEnded', () => {
      setRoomState(false);
      setText('პარტნიორი გაითიშა');
      props.chatStartState(true);


    });
       socket.on('privateMessage', ({ sender, message,time }) => {
      setMessages([...messages, { sender, message,time }]);
    });

    return () => {
      socket.off('assignedUsername');
      socket.off('chatStarted');
      socket.off('noAvailableUsers');
      socket.off('privateMessage');
      socket.off('chatEnded');
    };
  }, [messages,props]);
  return (
    
     <div className={classes.messageParent}>
        <div>
        <ul>
        <p>{text}</p>
          {messages.map((msg, index) => (
            <li  className={classes.parent} key={index}>
              <p  style={msg.sender===username?{color:"red" ,borderRight:"2px solid red" }:{color:"blue", borderRight:"2px solid blue"}} className={classes.sender}> <span>{msg.sender===username?"შენ :":"ის :"}</span><span className={classes.time}>{msg.time}</span></p>
              <p className={classes.messageBox}>{msg.message}</p>
            </li>
          ))}
        </ul>
      </div>
      {roomState&&<label  ref={divRef}  className={classes.messageLine}> 
          <MessageForm  send={handleSendMessage}  message={message} setMessage={setMessage} ></MessageForm>
          <IconLabelButtons  send={handleSendMessage}></IconLabelButtons>
        </label>}  
      </div>
  );
};
export default ChatPage;
