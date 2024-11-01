
const ChatBubble = ({author, username, message}) => {

  return (
    <div className="text-white">
        <div className={author === username ? 'float-right bg-slate-700 w-fit flex flex-col my-1 mx-2 py-3 px-5 rounded-3xl' : 'float-left bg-slate-900 w-fit flex flex-col my-1 mx-2 py-3 px-5 rounded-3xl'}>
          <p className='text-gray-400 text-1xl'>{author === username ? 'Me' : author}</p>
          <p className='text-white text-2xl'>{message}</p>
        </div>
    </div>
  )
}

export default ChatBubble