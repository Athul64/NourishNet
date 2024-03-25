import React, { useState } from "react";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { userSignup } from "../../../Services/userApi";
import { toast } from "react-toastify";

function Signup() {
  const navigate = useNavigate();

  const initialValues = {
    firstname: "",
    phoneNumber: "",
    email: "",
    password: "",
    conformPassword: "",
  };

  const onSubmit = async (values) => {
    try {
      const { data } = await userSignup(values);
      if (data.status) {
        navigate("/admin/");
        toast.success(data.message);
      } else {
        toast.error(data.message, {
          position: "top-right",
        });
      }
    } catch (errors) {
      console.log(errors);
    }
  };

  const validationSchema = Yup.object({
    firstname: Yup.string()
      .strict(true)
      .trim("* Name must not contain white space")
      .test(
        "* no-whitespace",
        "* Name must not contain white space",
        (value) => !/\s/.test(value)
      )
      .min(3, "*Name must be at least 3 characters long")
      .matches(/^[A-Za-z]+$/, "* Name must only contain characters")
      .required("* This field is required"),
    phoneNumber: Yup.string()
      .matches(/^\d{10}$/, "* Invalid phone number")
      .required("* This field is required"),
    email: Yup.string()
      .email("* Invaild email format")
      .required("* This field is required")
      .matches(
        /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
        "* Invalid email address"
      ),
    password: Yup.string()
      .required("* This field is required")
      .min(6, "* Password must be at least 6 characters long")
      .matches(
        /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).*$/,
        "* Password must contain at least one capital letter\nand one special character"
      ),
    conformPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("* This field is required"),
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });
  return (
    <div className="my-4">
      <section className=" ">
        <div
          className="px-4 py-5 px-md-5 text-center text-lg-start"
          style={{ backgroundColor: "hsl(0, 0%, 96%)" }}
        >
          <div className="container">
            <div className="row gx-lg-5 align-items-center">
              <div className="col-lg-6 mb-5 mb-lg-0">
                <h1 className="my-5 display-3  fw-bold ls-tight">
                  The Best management App <br />
                  <span className="text-primary">
                    for <span className="text-success"> Farm </span>
                  </span>
                </h1>
                <p style={{ color: "hsl(217, 10%, 50.8%)" }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eveniet, itaque accusantium odio, soluta, corrupti aliquam
                  quibusdam tempora at cupiditate quis eum maiores libero
                  veritatis? Dicta facilis sint aliquid ipsum atque?
                </p>
              </div>

              <div className="col-lg-6 mb-5 mb-lg-0">
                <div className="card">
                  <div className="card-body py-5 px-md-5">
                    <form onSubmit={formik.handleSubmit}>
                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <input
                              type="text"
                              name="firstname"
                              id="form3Example1"
                              className="form-control"
                              placeholder="Username"
                              onBlur={formik.handleBlur}
                              value={formik.values.firstname}
                              onChange={formik.handleChange}
                            />
                          </div>
                          {formik.touched.firstname &&
                          formik.errors.firstname ? (
                            <p
                              className="text-danger"
                              style={{
                                fontSize: "12px",
                                margin: "0px",
                                padding: "0px",
                              }}
                            >
                              {formik.errors.firstname}
                            </p>
                          ) : null}
                        </div>

                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <input
                              type="text"
                              name="phoneNumber"
                              id="form3Example2"
                              onBlur={formik.handleBlur}
                              value={formik.values.phoneNumber}
                              onChange={formik.handleChange}
                              className="form-control"
                              placeholder="Phone Number"
                            />
                          </div>
                          {formik.touched.phoneNumber &&
                          formik.errors.phoneNumber ? (
                            <p
                              className="text-danger"
                              style={{
                                fontSize: "12px",
                                margin: "0px",
                                padding: "0px",
                              }}
                            >
                              {formik.errors.phoneNumber}
                            </p>
                          ) : null}
                        </div>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          name="email"
                          id="form3Example3"
                          onBlur={formik.handleBlur}
                          value={formik.values.email}
                          onChange={formik.handleChange}
                          className="form-control"
                          placeholder="Email Address"
                        />
                        {formik.touched.email && formik.errors.email ? (
                          <p
                            className="text-danger"
                            style={{
                              fontSize: "12px",
                              margin: "0px",
                              padding: "0px",
                            }}
                          >
                            {formik.errors.email}
                          </p>
                        ) : null}
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          onBlur={formik.handleBlur}
                          value={formik.values.password}
                          name="password"
                          id="form3Example4"
                          onChange={formik.handleChange}
                          className="form-control"
                          placeholder="Password"
                        />
                        {formik.touched.password && formik.errors.password ? (
                          <p
                            className="text-danger"
                            style={{
                              fontSize: "12px",
                              margin: "0px",
                              padding: "0px",
                            }}
                          >
                            {formik.errors.password}
                          </p>
                        ) : null}
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          name="conformPassword"
                          id="form3Example5"
                          value={formik.values.conformPassword}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          className="form-control"
                          placeholder="Conform Password"
                        />
                        {formik.touched.conformPassword &&
                        formik.errors.conformPassword ? (
                          <p
                            className="text-danger"
                            style={{
                              fontSize: "12px",
                              margin: "0px",
                              padding: "0px",
                            }}
                          >
                            {formik.errors.conformPassword}
                          </p>
                        ) : null}
                      </div>
                      <button
                        type="submit"
                        className="btn btn-primary btn-block mb-4 w-100"
                      >
                        Add User
                      </button>
                      {/* <div class="signup_link">
                        Already have an account? <Link to="/login">Login</Link>
                      </div> */}
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Signup;
