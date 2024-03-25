import React, { useState, useEffect } from "react";
import "./Help.css";
import * as Yup from "yup";
import {
 
  helpAndSupportDetails,
} from "../../../Services/userApi";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import "./Help.css";
function Help() {
  const user = useSelector((state) => state.user.value);

  const initialValues = {
    issue: "",
    issueDetails: "",
  };
  const onSubmit = async (values, { resetForm }) => {
    console.log(values);
    const { data } = await helpAndSupportDetails(values, user._id, );
    if (data.status) {
      toast.success(data.message);
      resetForm({ values: initialValues });
    } else {
      toast.error(data.message);
    }
  };
  const validationSchema = Yup.object({
    issue: Yup.string().required("* This field is required"),
    issueDetails: Yup.string().required("* This field is required"),
  });
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });
  return (
    <div>
      <div className="formbold-main-wrapper">
        <div className="formbold-form-wrapper">
          <form onSubmit={formik.handleSubmit}>
            <div className="formbold-form-title">
              <h2 className="">Help and Support</h2>
            </div>

            <div className="fformbold-mb-3">
              <div>
                <label for="issue" className="formbold-form-label">
                  What's the issue ?
                </label>
                <input
                  type="text"
                  name="issue"
                  id="issue"
                  className="formbold-form-input"
                  onBlur={formik.handleBlur}
                  value={formik.values.issue}
                  onChange={formik.handleChange}
                />
              </div>
              {formik.touched.issue && formik.errors.issue ? (
                <p
                  className="text-danger"
                  style={{
                    fontSize: "12px",
                    margin: "0px",
                    padding: "0px",
                  }}
                >
                  {formik.errors.issue}
                </p>
              ) : null}
            </div>

            <div className="formbold-mb-3">
              <label for="address" className="formbold-form-label">
                Additional Details
              </label>
              <textarea
                type="text"
                name="issueDetails"
                id="issueDetails"
                className="formbold-form-input"
                onBlur={formik.handleBlur}
                value={formik.values.issueDetails}
                onChange={formik.handleChange}
              />
              {formik.touched.issueDetails && formik.errors.issueDetails ? (
                <p
                  className="text-danger"
                  style={{
                    fontSize: "12px",
                    margin: "0px",
                    padding: "0px",
                  }}
                >
                  {formik.errors.issueDetails}
                </p>
              ) : null}
            </div>

            <button type="submit" className="formbold-btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Help;
