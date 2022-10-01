import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './Dashboard'
import DetailPage from './DetailPage'
import Home from './Home'
import PrivateRoute from './PrivateRoute'
import Projects from './ProjectsPages/Project1'
import Tasks from './ProjectsPages/Tasks'
import SignIn from './SignIn'
import SignUp from './SignUp'

function Allroutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/detail" element={<DetailPage />} />
        <Route
          path="/dashboard/track"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard/projects"
          element={
            // <PrivateRoute>
              <Projects />
            // </PrivateRoute>
          }
        />
        <Route path="/task" element={<Tasks/>} />
      </Routes>
    </>
  );
}

export default Allroutes