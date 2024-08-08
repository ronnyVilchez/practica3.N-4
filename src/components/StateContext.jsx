import React, { createContext, useState } from 'react'

export const StateContext = createContext()

export const StateProvider = ({children}) => {
   const [tecState,setTecState] = useState(false)
function tec() {
    setTecState(!tecState)
}

  return (
    <StateContext.Provider value={{tec,tecState}}>
        {children}
    </StateContext.Provider>
  )
}
