import { useEffect, useState } from 'react'
import ChatBubble from './ChatBubble'
import { useAuth } from './AuthProvider';


const ChatBody = () => {	
	
	const {socket, user, messageList, setMessageList} = useAuth();	
  
  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageList((list) => [...list, data]);
    });
  }, [socket, setMessageList]);

  return (
    <div className="text-white max-w-[1240px] flex flex-col mx-auto pt-4">
       {messageList.map((messageData, index) => (
                <ChatBubble 
                    key={index}
                    username={user.username}
                    author={messageData.author}
                    message={messageData.message} 
                />
        ))}
    </div>
  )
}

export default ChatBody
