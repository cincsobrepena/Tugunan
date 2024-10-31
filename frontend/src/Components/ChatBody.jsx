import { useEffect } from 'react'
import ChatBubble from './ChatBubble'

const ChatBody = ({socket, username, messageList, onUpdateMessageList}) => {	

	useEffect(() => {
		socket.on("receive_message", (data) => {
			console.log("received")
			onUpdateMessageList(data);
		})
	}, [socket, onUpdateMessageList]);

  return (
    <div className="text-white max-w-[1240px] flex flex-col mx-auto pt-4">
			{
			messageList.map((messageContent) => {
				return <ChatBubble username={username} author={messageContent.author} message={messageContent.message}/>
			})
			}
    </div>
  )
}

export default ChatBody
