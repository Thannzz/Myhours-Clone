import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './Dashboard'
import DetailPage from './DetailPage'
import Home from './Home'
import PrivateRoute from './PrivateRoute'
import SignIn from './SignIn'
import SignUp from './SignUp'

function Allroutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/SignIn" element={<SignIn />}></Route>
        <Route path="/SignUp" element={<SignUp />}></Route>
        <Route path="/detail" element={<DetailPage />}></Route>
        <Route path="/dashboard" element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }></Route>
      </Routes>
    </>
  );
}

export default Allroutes