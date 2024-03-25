import React from 'react'
import Header from '../../Components/User/Header/Header'
import SubNavbar from '../../Components/User/SubNavbar/SubNavbar'
import ShowFarms from '../../Components/User/ShowUserFarms/ShowFarms'
import Footer from '../../Components/User/Footer/Footer'

function showFarmsPage() {
  return (
    <div><Header/>
    <SubNavbar/>
    <ShowFarms/>
    <Footer/>
    </div>
  )
}

export default showFarmsPage