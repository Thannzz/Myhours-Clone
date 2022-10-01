import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { AppContext } from '../context/Appcontext'

export default function PrivateRoute({children}) {
    let {isAuth} = useContext(AppContext);
    // console.log(isAuth)


    if(!isAuth){
        return <Navigate to="/SignIn" />;
    }
    return children

}
