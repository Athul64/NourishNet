import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css"
function Header() {
  const navigate = useNavigate();
  const adminLogout = () => {
    localStorage.removeItem("adminJWT");
    navigate("/admin/login");
  };

  return (
    <div className="mainHeader">
      <nav class="navbar navbar-expand-lg bg-body-tertiary my-0 header">
        <div class="container-fluid mx-5 ">
          <Link class="navbar-brand" to="/admin/">
            <b>
              NourishNet<span className="text-primary t-3">Admin</span>
            </b>
          </Link>
        </div>
        <div>  <i className="bi bi-person-plus" onClick={()=>navigate("/signup")} style={{ fontSize: '1.3em' }}></i> </div>
        <div>
          <button className="btn" onClick={adminLogout}>
            Logout
          </button>
        </div>
      </nav>
      <div style={{ paddingTop: "70px" }}>

      </div>
    </div>
  );
}

export default Header;
