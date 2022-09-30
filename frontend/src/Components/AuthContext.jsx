import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext();

const initial = {
  name: "",
  email: "",
  number: "",
  employee: "",
  country: "",
  company_name: "",
};

function AuthContextProvider(props) {
  const [isAuthData, setisAuthData] = useState(initial);

  return (
    <AuthContext.Provider value={{isAuthData,setisAuthData}}>
      {props.children}
    </AuthContext.Provider>
  );
}
export default AuthContextProvider;
