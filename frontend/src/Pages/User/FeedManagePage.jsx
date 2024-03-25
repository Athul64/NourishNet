import React from "react";
import Feed from "../../Components/User/FeedManagement/Feed";
import Header from "../../Components/User/Header/Header";
import SubNavbar from "../../Components/User/SubNavbar/SubNavbar";
import Footer from "../../Components/User/Footer/Footer";

function FeedManagePage() {
  return (
    <div>
      <Header />
      <SubNavbar />
      <Feed />
      <Footer />
    </div>
  );
}

export default FeedManagePage;
