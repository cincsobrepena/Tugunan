import { useRef } from "react"
import { useAuth } from "../Components/AuthProvider";

const Lobby = () => {

  const { joinRoom } = useAuth();

  const username = useRef(null);
  const room = useRef(null);

  const handleJoinRoom = () => {
    if (username.current.value !== "" && room.current.value !== "") {
      joinRoom(username.current.value, room.current.value);
      username.current.value = "";
      room.current.value = "";
    }
  }

  return (
		<div className="min-h-screen flex items-center justify-center">
			<div className="flex flex-col items-center rounded-3xl bg-slate-900 mt-10 mx-auto p-10 shadow-lg">
				<h1 className="uppercase text-white text-4xl font-bold">Join a Room</h1>
				<input 
					className="text-black mt-5 px-5 py-1 rounded-xl outline-none"
					type="text"
					placeholder="Username"
          ref={username}
          onKeyDown={(event) => {
          event.key === "Enter" && handleJoinRoom(); }}/>
				<input 
					className="text-black mt-5 px-5 py-1 rounded-xl outline-none"
					type="text"
					placeholder="Room"
          ref={room}
          onKeyDown={(event) => {
          event.key === "Enter" && handleJoinRoom(); }}/>
				<button className="uppercase text-white font-semibold bg-slate-700 hover:bg-slate-800 w-fit my-5 px-5 py-3 rounded-lg " type="button" onClick={handleJoinRoom}>Join</button>
			</div>
		</div>
  )
}

export default Lobby