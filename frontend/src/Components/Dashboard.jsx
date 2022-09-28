import React from 'react'
import Content from './Content'
import Sidebar from './Sidebar'
import '../styles/Dashboard.css'

export default function Dashboard() {
  return (
    <div className='dashboard'>
        <Sidebar/>
        <Content/>
      
    </div>
  )
}
