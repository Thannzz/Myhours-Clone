import { createContext, useState } from "react";

export let AppContext = createContext();

export default function AppContextProvider({ children }) {
  let [isAuth, setIsAuth] = useState(true);

  return (
    <AppContext.Provider value={{ isAuth, setIsAuth }}>
      {children}
    </AppContext.Provider>
  );
}
