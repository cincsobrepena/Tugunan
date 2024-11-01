import React from 'react'
import { RiLogoutBoxLine } from "react-icons/ri";
import { useAuth } from './AuthProvider';

const ChatHeader = () => {

  const {user, leaveRoom} = useAuth();

  return (
    <div className='text-white bg-slate-950 shadow-lg h-[60px] w-[100%] flex justify-between items-center mx-auto px-5'>
        <h1 className='uppercase text-2xl font-bold'>{`ROOM ${user.room}`}</h1>
        <RiLogoutBoxLine className='uppercase text-2xl font-bold cursor-pointer' onClick={leaveRoom}/>
    </div>
  )
}

export default ChatHeader