import React from 'react'
import Sidebar from './Sidebar'
import '../styles/Dashboard.css'
import Track from './Track'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from "axios"

const getUserName = (token)=>{
  return axios.get(`http://localhost:8080/projects`,{
    headers:{token:token}
  });
}

export default function Dashboard() {
  const [userName,setUserName] = useState(null);




  useEffect(()=>{
    getUserName("6333e6ca834c4636928012c3:thani@gmail.com :qwerty")
    .then((res)=>{
      // console.log(res.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  },[])


  return (
    <div className='dashboard'>
        <Sidebar/>
        <Track/>
      
    </div>
  )
}
