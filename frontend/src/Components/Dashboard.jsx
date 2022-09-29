import React from 'react'
import Sidebar from './Sidebar'
import '../styles/Dashboard.css'
import Track from './Track'

export default function Dashboard() {
  return (
    <div className='dashboard'>
        <Sidebar/>
        <Track/>
      
    </div>
  )
}
