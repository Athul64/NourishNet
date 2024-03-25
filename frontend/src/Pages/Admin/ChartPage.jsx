import React from "react";
import Chart from "../../Components/Admin/Chart/Chart";
import Header from "../../Components/Admin/Header/Header";
import SideBar from "../../Components/Admin/SideBar/SideBar";

function ChartPage() {
  return (
    <div>
      <Header />
      <SideBar />
      <Chart />
    </div>
  );
}

export default ChartPage;
