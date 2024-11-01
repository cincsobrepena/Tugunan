import React, { useRef } from 'react'
import { RiSendPlane2Fill } from "react-icons/ri";
import { useAuth } from './AuthProvider';

const ChatFooter = () => {

  const {sendMessage} = useAuth();
  const currentMessage = useRef();

  const handleSend = () => {
    const message = currentMessage.current.value;
    if(message !== ""){
      sendMessage(message);
      currentMessage.current.value = "";
    }
  }

  return (
    <div className='flex justify-between bg-slate-950 shadow-lg h-[90px] w-[100%] mx-auto px-5 py-5'>
      <input
        className='text-black text-2xl w-[85%] rounded-full py-2 px-3'
        type="text"
        placeholder='Hi...'
        ref={currentMessage}
        onKeyDown={(event) => {
          event.key === "Enter" && handleSend();
        }}/>
      <RiSendPlane2Fill
      className='w-[10%] text-5xl text-center mx-auto'
      onClick={handleSend}/>
    </div>
  )
}

export default ChatFooter