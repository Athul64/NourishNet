import React from "react";
import Mortality from "../../Components/User/Mortality/Mortality";
import Header from "../../Components/User/Header/Header";
import SubNavbar from "../../Components/User/SubNavbar/SubNavbar";
import Footer from "../../Components/User/Footer/Footer";

function MortalityPage() {
  return (
    <div>
      <Header />
      <SubNavbar />
      <Mortality />
      <Footer />
    </div>
  );
}

export default MortalityPage;
