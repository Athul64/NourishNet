import React from "react";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import "./AdminLogin.css";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { adminLogin } from "../../../Services/adminApi";
import { useDispatch } from "react-redux";
import { setAdminDetails } from "../../../Features/setAdmin";


function Login() {
  const initialValues = {
    email: "",
    password: "",
  };
  const navigate = useNavigate();
  const dispatch=useDispatch()
  const onSubmit = async (values) => {
    try {
      const { data } = await adminLogin(values);
      console.log(data, "USER RETURN DATA!!!");
      if(data.status){
       dispatch(setAdminDetails(data.admin))
        localStorage.setItem("adminJWT", data.token);
        toast.success(data.message)
        navigate("/admin/")
      }else{
        toast.error(data.message)
      }
     
    } catch (error) {
      console.log(error);
    }
  };
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("* Invaild email format")
      .required("* This field is required")
      .matches(
        /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
        "* Invalid email address"
      ),
    password: Yup.string().required("* This field is required"),
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });
  return (
    <body>
      <div className="signin">
        <div className="back-image">
          <div className="sign-in-text">
            <h2 className="active">Admin Log In</h2>
          
          </div>
          <div className="layer"></div>
          <p className="point">&#9650;</p>
        </div>
        <div className="form-section">
          <form onSubmit={formik.handleSubmit}>
            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
              <input
                type="text"
                placeholder="Email"
                id="username"
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? (
                <p
                  className="text-danger"
                  style={{ fontSize: "12px", margin: "0px" }}
                >
                  {formik.errors.email}
                </p>
              ) : null}

              <input
                type="password"
                placeholder="Password"
                id="password"
                name="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              {formik.touched.password && formik.errors.password ? (
                <p
                  className="text-danger"
                  style={{ fontSize: "12px", margin: "0px" }}
                >
                  {formik.errors.password}
                </p>
              ) : null}
            </div>
            <br />
           
            <button
              type="submit"
              className="sign-in-btn mdl-button mdl-js-ripple-effect mdl-js-button mdl-button--raised mdl-button--colored"
            >
              <span className="LogIn">LogIn</span>
            </button>
          </form>
        </div>
      </div>
    </body>
  );
}

export default Login;
