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
			<div className="flex flex-col items-center rounded-xl bg-green-600 mt-10 mx-auto p-10 shadow-2xl bg-opacity-75">
				<h1 className="uppercase text-white text-5xl font-bold mb-4">Tugunan</h1>
        <h2 className="uppercase text-white font-semibold">Join a Room</h2>
				<input 
					className="text-white bg-white bg-opacity-15 mt-3 px-5 py-1 rounded-sm outline-none"
					type="text"
					placeholder="Username"
          ref={username}
          onKeyDown={(event) => {
          event.key === "Enter" && handleJoinRoom(); }}/>
				<input 
					className="text-white bg-white bg-opacity-15 mt-5 px-5 py-1 rounded-sm outline-none"
					type="text"
					placeholder="Room"
          ref={room}
          onKeyDown={(event) => {
          event.key === "Enter" && handleJoinRoom(); }}/>
				<button className="uppercase text-white font-semibold bg-green-900 hover:bg-green-800 w-fit my-5 px-6 py-2 rounded-md shadow-xl " type="button" onClick={handleJoinRoom}>Join</button>
			</div>
		</div>
  )
}

export default Lobby