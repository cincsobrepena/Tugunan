import { createContext, useContext, useState, useEffect} from "react";
import io from "socket.io-client";

// Establish connection to server 
const AuthContext = createContext();
const socket = io.connect("http://localhost:3001");

export const AuthProvider = ({ children }) => {
  
  const [user, setUser] = useState(null);
  const [messageList, setMessageList] = useState([]);

  const joinRoom = (username, room) => {
    if (!user) {
      setUser({
        // userID,
        username,
        room,
        messageList: [],        
      });
      socket.emit("join_room", room);
    } else {
      setUser((prevUser) => ({
        ...prevUser,
        room,
      }));
    }
  }

  const leaveRoom = () => {
    setUser(null);
  };

  const sendMessage = async (message) => {
    if (message !== "") {
      const messageData = {
        room: user.room,
        author: user.username,
        message: message,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };
      await socket.emit("send_message", messageData);
      setMessageList((list) => [...list, messageData]);
    }
  };

  socket.on("receive_message", (data) => {
    console.log(data.author);
  });

  return (
    <AuthContext.Provider value={{socket, user, joinRoom, leaveRoom, sendMessage, messageList}}>
      {children}
    </AuthContext.Provider>
  );
  
};

export const useAuth = () => {
  return useContext(AuthContext);
};
