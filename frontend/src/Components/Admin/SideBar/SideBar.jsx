import React from "react";
import { HiUsers } from "react-icons/hi";
import { AiFillPieChart } from "react-icons/ai";
import { AiFillFilePpt } from "react-icons/ai";
import { BiCategory } from "react-icons/bi";
import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import "./SideBar.css";
import { Link } from "react-router-dom";

function SideBar() {
  return (
    <div>
      <SideNav className="sidenav">
        <SideNav.Toggle className="toggle" />
        <SideNav.Nav defaultSelected="DashBoard">
          <NavItem eventKey="/admin/">
            <NavIcon>
              <AiFillPieChart size={20} className="sidebarIcon" />
            </NavIcon>
            <NavText>Home</NavText>
            <NavItem eventKey="/admin/">
              <NavIcon></NavIcon>
              <NavText><Link className="no-underline" to={"/admin/"}>Sale chart</Link></NavText>
            </NavItem>
            {/* <NavItem eventKey="/admin/">
              <NavIcon></NavIcon>
              <NavText>Booking Histroy</NavText>
            </NavItem> */}
          </NavItem>
          <NavItem eventKey="/">
            <NavIcon>
              <HiUsers size={20} className="sidebarIcon" />
            </NavIcon>
            <NavText>Users</NavText>
            <NavItem eventKey="/admin/userDetails">
              <NavIcon></NavIcon>
              <NavText><Link className="no-underline" to={"/admin/userDetails"}>List</Link> </NavText>
            </NavItem>
            <NavText>Users</NavText>
            {/* <NavItem eventKey="/admin/">
              <NavIcon></NavIcon>
              <NavText><Link className="no-underline" to={"/admin/"}>Farm Details</Link> </NavText>
            </NavItem> */}
          </NavItem>
          {/* <NavItem eventKey="/">
            <NavIcon>
              <AiFillFilePpt size={20} className="sidebarIcon" />
            </NavIcon> */}
            {/* <NavText>All Stock</NavText>
            <NavItem eventKey="/admin/">
              <NavIcon></NavIcon>
              <NavText>List Stock</NavText>
            </NavItem> */}
            {/* <NavItem eventKey="/admin/">
              <NavIcon></NavIcon>
              <NavText>Add Stock</NavText>
            </NavItem> */}
          {/* </NavItem> */}
          {/* <NavItem eventKey="/admin/">
            <NavIcon>
              <BiCategory size={20} className="sidebarIcon" />
            </NavIcon>
           <Link></Link> <NavText>Help and Support</NavText>
          </NavItem> */}
        </SideNav.Nav>
      </SideNav>
    </div>
  );
}

export default SideBar;
