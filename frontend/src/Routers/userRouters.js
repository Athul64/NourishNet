import { Route, Routes } from "react-router-dom";
import SignupPage from "../Pages/User/SignupPage";
import React from "react";
import LoginPage from "../Pages/User/LoginPage";
import HomePage from "../Pages/User/HomePage";
import AddFarm from "../Pages/User/AddFarmPage";
import FeedManagePage from "../Pages/User/FeedManagePage";
import ShowFarmsPage from "../Pages/User/ShowFarmsPage";
import MedicinePage from "../Pages/User/MedicinePage";
import Mortality from "../Components/User/Mortality/Mortality";
import MortalityPage from "../Pages/User/MortalityPage";
import HelpPage from "../Pages/User/HelpPage";
import UserUrlAuth from "../RouterAuth/UserUrlAuth";

function UserRouters() {
  return (
    <Routes>
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route element={<UserUrlAuth/>}>
      <Route path="/" element={<HomePage />} />
      <Route path="/addfarm" element={<AddFarm />} />
      <Route path="/feed/:farmId" element={<FeedManagePage />} />
      <Route path="/showfarms/:values" element={<ShowFarmsPage />} />
      <Route path="/medicine/:farmId" element={<MedicinePage />} />
      <Route path="/mortality/:farmId" element={<MortalityPage />} />
      <Route path="/help" element={<HelpPage/>}/>
      </Route>
    </Routes>
  );
}

export default UserRouters;
