import { createContext, useState } from "react";

export const SessionContext = createContext()

export const SessionController = (props) => {

  // const [isLoggedin, setIsLoggedin] = useState(false)
  // const [sessionUser, setSessionUser] = useState({})
  // const [user, setUser] = useState({})

  return(
    // <SessionContext.Provider value={ user }>
    // <SessionContext.Provider value={ [isLoggedin, setIsLoggedin, sessionUser, setSessionUser] }>
    <SessionContext.Provider>
      {props.children}
    </SessionContext.Provider>
  )
}
