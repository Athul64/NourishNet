import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Home.css";
import SubNavbar from "../SubNavbar/SubNavbar";
function Home() {
  const user = useSelector((state) => state.user.value);
  return (
    <div className=" position-relative patent-div ">
      <img
        className="carosel-Image "
        src="https://t4.ftcdn.net/jpg/06/56/12/73/240_F_656127362_3vyixiuihPAOkki9v7WzfrQ4q2SuAwhM.jpg"
      ></img>
      <div className="info-div">
        <p className="image-text-div">
          Welcome to our platform,
          <br />
          <span className="userName">
            {user?.userName ? user.userName : "Guest"}
          </span>
        </p>
      </div>
    </div>
  );
}

export default Home;
