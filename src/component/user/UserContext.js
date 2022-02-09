import React, { createContext, useState } from 'react';
export const UserContext = createContext()

export const UserContextProvider = (props) => {
  const { children } = props

  const [user, setUser] = useState(null)

  const onLogin = (email, password) => setUser({ id: 1 })
  const onLogout = () => setUser(null)

  return (
    <UserContext.Provider
      value={{
        isLoggedIn: !! user,
        onLogin, onLogout
      }}
    >
      {children}
    </UserContext.Provider>
  )
}




