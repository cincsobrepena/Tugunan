import React, { createContext, useState } from 'react'
// import io from 'socket.io-client'

// const socket = io.connect("http://localhost:3001");
const AuthContext = createContext();

const AuthProvider = ({children}) => {

	const [userData, setUserData] = useState([]);

  return (
    <AuthContext.Provider value={{userData}}>
			{children}
		</AuthContext.Provider>
  )
}

export default AuthProvider