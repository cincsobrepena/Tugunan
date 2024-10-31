import React, { useState } from 'react'
import { RiSendPlane2Fill } from "react-icons/ri";

const ChatFooter = ({socket, username, room, messageList, onUpdateMessageList}) => {

  const [currentMessage, setCurrentMessage] = useState("");

  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        room: room,
        author: username,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };

      await socket.emit("send_message", messageData);
      onUpdateMessageList(messageData);
      setCurrentMessage("");
      
    }
  };


  return (
    <div className='flex justify-between bg-slate-950 shadow-lg h-[90px] w-[100%] mx-auto px-5 py-5'>
      <input
        className='text-black text-2xl w-[85%] rounded-full py-2 px-3'
        type="text"
        name=""
        id="inputChat"
        placeholder='Hi...'
        onChange={(e) => setCurrentMessage(e.target.value)}
        onKeyDown={(event) => {
          event.key === "Enter" && sendMessage();
        }}/>
      <RiSendPlane2Fill
      className='w-[10%] text-5xl text-center mx-auto'
      onClick={sendMessage}/>
    </div>
  )
}

export default ChatFooter