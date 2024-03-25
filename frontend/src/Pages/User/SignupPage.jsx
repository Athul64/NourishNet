import React from "react";
import Signup from "../../Components/User/Signup/Signup";
import Header from "../../Components/Admin/Header/Header"
import SideBar from "../../Components/Admin/SideBar/SideBar";

function SignupPage() {
  return (
    <div>
      <Header/>
        <SideBar/>
      <Signup />
    </div>
  );
}

export default SignupPage;
