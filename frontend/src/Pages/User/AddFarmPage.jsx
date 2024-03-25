import React from "react";
import AddFarm from "../../Components/User/AddFarm/AddFarm";
import Header from "../../Components/User/Header/Header";
import SubNavbar from "../../Components/User/SubNavbar/SubNavbar";
import Footer from "../../Components/User/Footer/Footer";

function AddFarmPage() {
  return (
    <div>
      <Header />
      <SubNavbar />
      <AddFarm />
      <Footer />
    </div>
  );
}

export default AddFarmPage;
