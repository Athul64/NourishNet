import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./Feed.css";
import { addFeedDetails, showFeedDetails } from "../../../Services/userApi";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

function Feed() {
  const farmId = useParams().farmId;
  const user = useSelector((state) => state.user.value);
  const [feedDetails, setFeedDetails] = useState([]);

  const fetchFeedDetails = async () => {
    try {
      const { data } = await showFeedDetails(farmId, user?._id);
      setFeedDetails(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchFeedDetails();
  }, [farmId, user?._id]);

  const initialValues = {
    recived: "",
    consumed: "",
  };

  const onSubmit = async (values, { resetForm }) => {
    const { data } = await addFeedDetails(values, user._id, farmId);
    if (data.status) {
      toast.success(data.message);
      fetchFeedDetails();
      resetForm({ values: initialValues });
    } else {
      toast.error(data.message);
    }
  };

  const validationSchema = Yup.object({
    recived: Yup.string()
      .required("* This field is required")
      .matches(/^\d+$/, "* Feeds recived must be a number")
      .min(1, "* Poultry population must be at least 1"),

    consumed: Yup.string()
      .required("* This field is required")
      .matches(/^\d+$/, "* Feeds recived must be a number")
      .min(1, "* Poultry population must be at least 1"),
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
                <h2 className="">Feed Management</h2>
                <p>Fill the details about your feed</p>
              </div>

              <div className="formbold-input-flex">
                <div>
                  <label htmlFor="firstname" className="formbold-form-label">
                    Feeds Recived
                  </label>
                  <input
                    type="number"
                    name="recived"
                    id="recived"
                    placeholder="no. of bags"
                    className="formbold-form-input"
                    onBlur={formik.handleBlur}
                    value={formik.values.recived}
                    onChange={formik.handleChange}
                  />
                  {formik.touched.recived && formik.errors.recived ? (
                    <p
                      className="text-danger"
                      style={{
                        fontSize: "12px",
                        margin: "0px",
                        padding: "0px",
                      }}
                    >
                      {formik.errors.recived}
                    </p>
                  ) : null}
                </div>

                <div className="fformbold-mb-3">
                  <div>
                    <label htmlFor="phone" className="formbold-form-label">
                      Feeds Consumed
                    </label>
                    <input
                      type="number"
                      name="consumed"
                      id="consumed"
                      placeholder="no. of bags"
                      className="formbold-form-input"
                      onBlur={formik.handleBlur}
                      value={formik.values.consumed}
                      onChange={formik.handleChange}
                    />
                  </div>
                  {formik.touched.consumed && formik.errors.consumed ? (
                    <p
                      className="text-danger"
                      style={{
                        fontSize: "12px",
                        margin: "0px",
                        padding: "0px",
                      }}
                    >
                      {formik.errors.consumed}
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
            <h2>Feed Records</h2>

            {feedDetails && feedDetails.length === 0 ? (
              <p className="emptyMsg">No feed records available</p>
            ) : (
              <table className="table table-light showFarm">
                <thead>
                  <tr>
                    <th>Si.no</th>
                    <th>Date</th>
                    <th>Received</th>
                    <th>Consumed</th>
                    <th>Balance</th>
                  </tr>
                </thead>
                <tbody>
                  {feedDetails &&
                    feedDetails.map((values, index) => (
                      <tr key={index} className="table-active">
                        <td>{index + 1}</td>
                        <td>
                          {new Date(values.feedDate).toLocaleDateString()}
                        </td>
                        <td>{values.qtyReceived} bags </td>
                        <td>{values.qtyConsumed} bags</td>
                        <td>{values.balance} bags</td>
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

export default Feed;
