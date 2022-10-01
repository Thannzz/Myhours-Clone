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
    let token = JSON.parse(localStorage.getItem("token"))
    // console.log("in track page----->",token)
    getUserName("6333e691834c4636928012bf:thaa@gmail.com :qwerty")
      .then((res) => {
        // console.log("user name--->", res.data[0].companyID.name);
        setUserName(res.data[0].companyID.name);
      })
      .catch((err) => {
        console.log(err);
      });
  },[])


  return (
    <div className="dashboard">
      <Sidebar userName={userName} />
      <Track userName={userName} />
    </div>
  );
}
