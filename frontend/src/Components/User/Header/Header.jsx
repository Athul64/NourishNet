import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import { setUserDetails } from "../../../Features/setUser";
import { userHeader } from "../../../Services/userApi";
function Header() {
  const user = useSelector((state) => state.user.value);
  console.log(user,"___");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleProfileClick = () => {};
  const userLogOut = () => {
    localStorage.removeItem("jwt")
    dispatch(setUserDetails(""));
    navigate("/login");
  };
  useEffect(() => {
    userHeader().then((response) => {
      console.log(response)
      if (response.data.status) {
        dispatch(setUserDetails(response.data.user));
      }
    });
  }, []);
  const handleLoginClick = () => {
    navigate("/login");
  };
  const handleSignupClick = () => {
    navigate("/signup");
  };

 

  
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary my-2 ">
        <div class="container-fluid mx-5 ">
          <Link class="navbar-brand" to={"/"}>
            {" "}
            <b>NourishNet</b>
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
             
            </ul>
          </div>
        </div>
        {user ? (
          <div className="d-flex">
            {/* <div className="courseBlock">
              <Link to="/userOrders" className="myCourse">
              info
              </Link>
            </div> */}
            {/* <div>
              <button className="profileButton" onClick={handleProfileClick}>
                {user.userName}
              </button>
            </div> */}
            <div className="userlogOutBtnDiv">
              {" "}
              <button className="userloginBtn mx-5" onClick={userLogOut}>
                Logout
              </button>
            </div>
          </div>
        ) : (
          <div className="loginSignupBtn px-3">
            <button className="loginButton" onClick={handleLoginClick}>
              Login
            </button>
            {/* <button className="signupButton" onClick={handleSignupClick}>
              Signup
            </button> */}
          </div>
        )}
      </nav>
    </div>
  );
}

export default Header;
