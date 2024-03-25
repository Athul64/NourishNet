import React from 'react'
import Help from '../../Components/User/HelpAndSupport/Help'
import Header from '../../Components/User/Header/Header'
import SubNavbar from '../../Components/User/SubNavbar/SubNavbar'
import Footer from '../../Components/User/Footer/Footer'

function HelpPage() {
  return (
    <div>
        <Header/>
        <SubNavbar/>
    <Help/>
    <Footer/>
    </div>
  )
}

export default HelpPage