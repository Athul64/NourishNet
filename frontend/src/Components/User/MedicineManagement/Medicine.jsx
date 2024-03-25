import React, { useState, useEffect } from "react";
import "./Medicine.css";
import * as Yup from "yup";
import {
  showMedicineDetails,
  addMedicineDetails,
} from "../../../Services/userApi";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useFormik } from "formik";
function Medicine() {
  const farmId = useParams().farmId;
  const user = useSelector((state) => state.user.value);
  const [MedicineDetails, setMedicineDeatils] = useState([]);

  const fetchFeedDetails = async () => {
    try {
      const { data } = await showMedicineDetails(farmId, user?._id);
      setMedicineDeatils(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchFeedDetails();
  }, [farmId, user?._id]);

  const initialValues = {
    date: "",
    dateOfVaccination: "",
    quantity: "",
    medicineName: "",
  };

  const onSubmit = async (values, { resetForm }) => {
    const { data } = await addMedicineDetails(values, user._id, farmId);
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
    dateOfVaccination: Yup.date().required("* This field is required"),
    quantity: Yup.number()
      .required("* This field is required")
      .positive("* Quantity must be a positive number"),
    medicineName: Yup.string().required("* This field is required"),
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
                <h2 className="">Medicine Management</h2>
                <p>Fill the details about your medicine</p>
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
                    >{formik.errors.date}</p>
                  ) : null}
                </div>
                <div>
                  <label for="Date" className="formbold-form-label">
                    {" "}
                    Date of vaccination
                  </label>
                  <input
                    type="date"
                    id="dateOfVaccination"
                    name="dateOfVaccination"
                    className="formbold-form-input"
                    onBlur={formik.handleBlur}
                    value={formik.values.dateOfVaccination}
                    onChange={formik.handleChange}
                  />
                  {formik.touched.dateOfVaccination &&
                  formik.errors.dateOfVaccination ? (
                    <p
                      className="text-danger"
                      style={{
                        fontSize: "12px",
                        margin: "0px",
                        padding: "0px",
                      }}
                    >
                      {formik.errors.dateOfVaccination}
                    </p>
                  ) : null}
                </div>
              </div>
              <div className="formbold-input-flex">
                <div>
                  <label for="phone" className="formbold-form-label">
                    Quantity
                  </label>
                  <input
                    type="number"
                    name="quantity"
                    id="quantity"
                    className="formbold-form-input"
                    onBlur={formik.handleBlur}
                    value={formik.values.quantity}
                    onChange={formik.handleChange}
                  />
                   {formik.touched.quantity && formik.errors.quantity ? (
                  <p
                    className="text-danger"
                    style={{
                      fontSize: "12px",
                      margin: "0px",
                      padding: "0px",
                    }}
                  >
                    {formik.errors.quantity}
                  </p>
                ) : null}
                </div>
               
                <div>
                  <label for="firstname" className="formbold-form-label">
                    Medicine name
                  </label>
                  <input
                    type="text"
                    name="medicineName"
                    id="medicineName"
                    className="formbold-form-input"
                    onBlur={formik.handleBlur}
                    value={formik.values.medicineName}
                    onChange={formik.handleChange}
                  />
                  {formik.touched.medicineName && formik.errors.medicineName ? (
                    <p
                      className="text-danger"
                      style={{
                        fontSize: "12px",
                        margin: "0px",
                        padding: "0px",
                      }}
                    >
                      {formik.errors.medicineName}
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
            <h2>Medicine Records</h2>

            {MedicineDetails?.length === 0 ? (
              <p className="emptyMsg">No medicine records available</p>
            ) : (
              <table className="table table-light showFarm">
                <thead>
                  <tr>
                    <th>Si.no</th>
                    <th>Date</th>
                    <th>Medicine Name</th>
                    <th>Quantity</th>
                    <th>Last vaccination Date</th>
                   
                  </tr>
                </thead>
                <tbody>
                  {MedicineDetails.map((values, index) => (
                    <tr key={index} className="table-active">
                      <td>{index + 1}</td>
                      <td>{values.date}</td>
                      <td>{values.medicineName}</td>
                      <td>{values.Quantity}</td>
                      <td>{values.dateOfVaccination}</td>
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

export default Medicine;
