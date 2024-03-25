import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";
import { getUserDetails, userDisable } from "../../../Services/adminApi";

import "./ListUser.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function ListUser() {
  const [userDetails, setUserDetails] = useState([]);
const navigate=useNavigate()
  const userDisableFun = async (id, index) => {
    try {
      const { data } = await userDisable(id);
      if (data.status) {
        toast.success(data.message);
        setUserDetails((prevUsers) =>
          prevUsers.map((user, i) =>
            i === index ? { ...user, blockStatus: !user.blockStatus } : user
          )
        );
      } else {
        toast.success(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserDetails().then((response) => {
      console.log(response,"^^^^^^>>>>");
      setUserDetails(response.data.user);
    });
  },[]);
  return (
    <div>
      <Header />
      <SideBar />
      <div className="content-Div">
        <h5>
          <b>Users List</b>
        </h5>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
              <th scope="col">Phone Number</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {userDetails.map((user, index) => (
              <tr
                className
                {...(user.blockStatus ? "userRow" : "")}
                key={user?._id}
              >
                <td>{user?.userName}</td>
                <td>{user?.email}</td>
                <td>{user?.phoneNumber}</td>
                <td>
                  <div>
                    <button
                      onClick={() => userDisableFun(user._id, index)}
                      className={user?.blockStatus ? "enablebtn" : "disablebtn"}
                    >
                      {user?.blockStatus ? "Unblock" : "Block"}
                    </button>
                    <button className="viewBtn mx-3" onClick={()=>{navigate(`/admin/userfarm/${user._id}`)}}>Details</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListUser;
