import React, { useState } from 'react';
import ChatHeader from '../Components/ChatHeader';
import ChatBody from '../Components/ChatBody';
import ChatFooter from '../Components/ChatFooter';

const ChatRoom = ({socket, username, room, onQuit}) => {

  const [messageList, setMessageList] = useState([]);

  const updateMessageList = (messageData) => {
    setMessageList((list) => [...list, messageData]);
    console.log(messageList)
  }

  return (
    <div className="flex flex-col min-h-screen text-white max-w-[1240px] mx-auto">
      <ChatHeader onQuit={onQuit}/>
      <div className="flex-grow overflow-y-auto h-0">
        <div className="h-full">
          <ChatBody socket={socket} username={username} room={room} messageList={messageList} onUpdateMessageList={updateMessageList}/>
        </div>
      </div>
      <ChatFooter socket={socket} username={username} room={room} messageList={messageList} onUpdateMessageList={updateMessageList}/>
    </div>
  );
};

export default ChatRoom;
