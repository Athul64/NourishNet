import React from 'react'
import AdminHome from '../../Components/Admin/AdminHome/AdminHome'
import Header from '../../Components/Admin/Header/Header'
import SideBar from '../../Components/Admin/SideBar/SideBar'

function HomeAdmin() {
  return (
    <div>
        <Header/>
        <SideBar/>
    <AdminHome/></div>
  )
}

export default HomeAdmin