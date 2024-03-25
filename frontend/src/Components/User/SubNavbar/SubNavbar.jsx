import React from "react";
import "./SubNavBar.css";
import { Link } from "react-router-dom";
function SubNavbar() {
  return (
    <div className="firstDiv">
      <div className="SubmainDiv container">
        <ul className="subList">
          <li>
            <Link className="Link-none" to={"/addfarm"}>
              Add Farm Details
            </Link>
          </li>
          <li>
            <Link className="Link-none" to={"/showfarms/Feed"}>
              Feed Management
            </Link>
          </li>
          <li>
            <Link className="Link-none" to={"/showfarms/Medicine"}>
              Medicine Management
            </Link>
          </li>
          <li>
            <Link className="Link-none" to={"/showfarms/Mortality"}>
              Mortality Tracking
            </Link>
          </li>
          <li>
            <Link className="Link-none" to={"/help"}>Help and Support</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SubNavbar;
