import React from 'react'
import Medicine from '../../Components/User/MedicineManagement/Medicine'
import SubNavbar from '../../Components/User/SubNavbar/SubNavbar'
import Header from '../../Components/User/Header/Header'
import Footer from '../../Components/User/Footer/Footer'
function MedicinePage() {
  return (
    <div>
    <Header/>
        <SubNavbar/>
    <Medicine/>
    <Footer/>
    </div>
  )
}

export default MedicinePage