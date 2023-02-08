import { createContext, useState } from "react";

export const SessionContext = createContext()

export const SessionController = (props) => {
  const [isLoggedin, setIsLoggedin] = useState(false)
  const [sessionUser, setSessionUser] = useState({})

  return(
    <SessionContext.Provider value={ [isLoggedin, setIsLoggedin, sessionUser, setSessionUser] }>
        {props.children}
    </SessionContext.Provider>
  )
}
