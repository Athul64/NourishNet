import React from 'react'
import Listfarm from '../../Components/Admin/ListFarm/Listfarm'
import { useParams } from 'react-router-dom'
import Header from '../../Components/Admin/Header/Header'
import SideBar from '../../Components/Admin/SideBar/SideBar'

function UserFarmPage() {
 
  return (
    <div>
        <Header/>
        <SideBar/>
    <Listfarm/></div>
  )
}

export default UserFarmPage