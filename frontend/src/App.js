import React, { useState } from 'react'
import ChatRoom from './Pages/ChatRoom'
import Lobby from './Pages/Lobby';
import io from 'socket.io-client'

const socket = io.connect("http://localhost:3001");

const App = () => {

  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [isJoined, setIsJoined] = useState(false);
  
  const join_room = (_username, _room) => {
    if(_username !== "" && _room !== "") {
      console.log(`${_username} & ${_room}`);
      console.log('Clicked');
      socket.emit("join_room", room);
      setUsername(_username);
      setRoom(_room);
      setIsJoined(true);
    }
  }

  const quit_room = () => {
    setIsJoined(false);
  }

  return (
    <>
      {!isJoined ? <Lobby onJoinRoom={join_room}/>
      : <ChatRoom socket={socket} username={username} room={room} onQuit={quit_room}/>}
    </>
  )
}

export default App
