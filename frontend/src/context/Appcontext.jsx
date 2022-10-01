import { createContext, useState } from "react"

export let AppContext = createContext();


export default function AppContextProvider({children}) {
    let [isAuth,setIsAuth] = useState(true);
    let [ project, setProject ] = useState({})
  return (

    <AppContext.Provider value={{isAuth, setIsAuth, project, setProject}} >
        {children}
    </AppContext.Provider>
    
  )
}
