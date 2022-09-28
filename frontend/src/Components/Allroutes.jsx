import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DetailPage from './DetailPage'
import Home from './Home'
import Navbar from './Navbar'




import SignIn from './SignIn'
import SignUp from './SignUp'

function Allroutes() {
  return (
  <>

   <Routes>
   
    <Route  path="/" element={<Home/>}></Route>
    <Route path="/SignIn" element={<SignIn/>}></Route>
    <Route path="/SignUp" element={<SignUp/>}></Route>
    <Route path="/detail" element={<DetailPage/>}></Route>


   </Routes>
   </>
  )
}

export default Allroutes