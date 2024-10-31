import { useState } from "react"

const Lobby = ({onJoinRoom}) => {

	const [username, setUsername] = useState("");
	const [room, setRoom] = useState("");

	const handleJoinButton = () => {
		onJoinRoom(username, room);
	}

  return (
		<div className="min-h-screen flex items-center justify-center">
			<div className="flex flex-col items-center rounded-3xl bg-slate-900 mt-10 mx-auto p-10 shadow-lg">
				<h1 className="uppercase text-white text-4xl font-bold">Join a Room</h1>
				<input 
					className="text-black mt-5 px-5 py-1 rounded-xl outline-none"
					type="text"
					name=""
					id=""
					placeholder="Username"
					onChange={(e) => setUsername(e.target.value)}/>
				<input 
					className="text-black mt-5 px-5 py-1 rounded-xl outline-none"
					type="text"
					name=""
					id=""
					placeholder="Room"
					onChange={(e) => setRoom(e.target.value)}/>
				<button className="uppercase text-white font-semibold bg-slate-700 hover:bg-slate-800 w-fit my-5 px-5 py-3 rounded-lg " type="button" onClick={handleJoinButton}>Join</button>
			</div>
		</div>
  )
}

export default Lobby