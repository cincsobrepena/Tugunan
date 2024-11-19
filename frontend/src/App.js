import ChatRoom from './Pages/ChatRoom'
import Lobby from './Pages/Lobby';
import { AuthProvider, useAuth } from './Components/AuthProvider';

const App = () => {
  return (
    <AuthProvider>
      <Main/>
    </AuthProvider>
  )
}

const Main = () => {
  const { user } = useAuth();
  return (
    <>
      {user ? <ChatRoom/> : <Lobby/>}
    </>
  )
};

export default App
