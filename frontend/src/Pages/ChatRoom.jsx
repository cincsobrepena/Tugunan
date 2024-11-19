import ChatHeader from '../Components/ChatHeader';
import ChatBody from '../Components/ChatBody';
import ChatFooter from '../Components/ChatFooter';

const ChatRoom = () => {

  return (
    <div className="flex flex-col min-h-screen text-white max-w-[1240px] mx-auto">
      <ChatHeader/>
      <div className="flex-grow overflow-y-auto h-0">
        <div className="h-full">
          <ChatBody/>
        </div>
      </div>
      <ChatFooter/>
    </div>
  );
};

export default ChatRoom;
