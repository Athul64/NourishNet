import React, { useState, useEffect } from "react";
import "./Mortality.css";
import * as Yup from "yup";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import { addMortality, showMortality } from "../../../Services/userApi";
function Mortality() {
  const farmId = useParams().farmId;
  const user = useSelector((state) => state.user.value);
  const [mortalityDetails, setMortalityDeatils] = useState([]);

  const fetchFeedDetails = async () => {
    try {
      const { data } = await showMortality(farmId, user?._id);
      setMortalityDeatils(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchFeedDetails();
  }, [farmId, user?._id]);

  const initialValues = {
    date: "",
    noOfMortality: "",
  };

  const onSubmit = async (values, { resetForm }) => {
    console.log(values);
    const { data } = await addMortality(values, user._id, farmId);
    if (data.status) {
      toast.success(data.message);
      fetchFeedDetails();
      resetForm({ values: initialValues });
    } else {
      toast.error(data.message);
    }
  };
  const validationSchema = Yup.object({
    date: Yup.date().required("* This field is required"),
    noOfMortality: Yup.number()
      .required("* This field is required")
      .positive("* Quantity must be a positive number"),
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });
  return (
    <div className="mainDiv">
      <div>
        <div className="formbold-main-wrapper">
          <div className="formbold-form-wrapper">
            <form onSubmit={formik.handleSubmit}>
              <div className="formbold-form-title">
                <h2 className="">Mortality Management</h2>
                <p>Fill the details about mortality</p>
              </div>

              <div className="formbold-input-flex">
                <div>
                  <label for="Date" className="formbold-form-label">
                    {" "}
                    Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    className="formbold-form-input"
                    onBlur={formik.handleBlur}
                    value={formik.values.date}
                    onChange={formik.handleChange}
                  />
                  {formik.touched.date && formik.errors.date ? (
                    <p
                      className="text-danger"
                      style={{
                        fontSize: "12px",
                        margin: "0px",
                        padding: "0px",
                      }}
                    >
                      {formik.errors.date}
                    </p>
                  ) : null}
                </div>
                <div>
                  <label for="phone" className="formbold-form-label">
                    Quantity
                  </label>
                  <input
                    type="number"
                    name="noOfMortality"
                    id="noOfMortality"
                    className="formbold-form-input"
                    onBlur={formik.handleBlur}
                    value={formik.values.noOfMortality}
                    onChange={formik.handleChange}
                  />
                  {formik.touched.noOfMortality &&
                  formik.errors.noOfMortality ? (
                    <p
                      className="text-danger"
                      style={{
                        fontSize: "12px",
                        margin: "0px",
                        padding: "0px",
                      }}
                    >
                      {formik.errors.noOfMortality}
                    </p>
                  ) : null}
                </div>
              </div>
              <button type="submit" className="formbold-btn">
                Submit
              </button>
            </form>
          </div>
          <div className="row-containers">
            <h2>Mortality Records</h2>

            {mortalityDetails?.length === 0 ? (
              <p className="emptyMsg">No Mortality records available</p>
            ) : (
              <table className="table table-light showFarm">
                <thead>
                  <tr>
                    <th>Si.no</th>
                    <th>Date</th>
                    <th>no of Mortality</th>
                    <th>Balance</th>
                  </tr>
                </thead>
                <tbody>
                  {mortalityDetails.map((values, index) => (
                    <tr key={index} className="table-active">
                      <td>{index + 1}</td>
                      <td>{values.date}</td>
                      <td>{values.noOfMortality}</td>
                      <td>{values.balanceCount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mortality;
