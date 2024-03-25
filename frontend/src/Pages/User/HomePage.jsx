import React from "react";
import Home from "../../Components/User/Home/Home";
import Header from "../../Components/User/Header/Header";
import SubNavbar from "../../Components/User/SubNavbar/SubNavbar";
import Footer from "../../Components/User/Footer/Footer";
function HomePage() {
  return (
    <div>
      <Header />
      <SubNavbar />
      <Home />
      <Footer />
    </div>
  );
}

export default HomePage;
