import React from 'react'
import { RiLogoutBoxLine } from "react-icons/ri";

const ChatHeader = ({onQuit}) => {

  return (
    <div className='text-white bg-slate-950 shadow-lg h-[60px] w-[100%] flex justify-between items-center mx-auto px-5'>
        <h1 className='uppercase text-2xl font-bold'>Room Name</h1>
        <RiLogoutBoxLine className='uppercase text-2xl font-bold cursor-pointer' onClick={onQuit}/>
    </div>
  )
}

export default ChatHeader