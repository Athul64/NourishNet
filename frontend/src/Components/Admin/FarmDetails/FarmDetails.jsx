import React, { useEffect, useState } from "react";
import "./FarmDetails.css";
import {
  getFeedDetails,
  getMedicineDetails,
  getMortalityDetails,
} from "../../../Services/adminApi";
import { useParams } from "react-router-dom";
function FarmDetails() {
  const { farmId, userId } = useParams();
  const [medicineDetails, setMedicineDetails] = useState([]);
  const [feedDetails, setFeedDetails] = useState([]);
  const [mortalityDetails, setMortalityDetails] = useState([]);

  const fetechMedicineDetails = async () => {
    const { data } = await getMedicineDetails(farmId, userId);
    setMedicineDetails(data.data);
  };
  const fetchFeedDetails = async () => {
    const { data } = await getFeedDetails(userId, farmId);
    setFeedDetails(data.data);
  };

  const fetchMortalityDetails = async () => {
    const { data } = await getMortalityDetails(farmId, userId);
    console.log(data.data, "??????/");
    setMortalityDetails(data.data);
  };

  useEffect(() => {
    fetechMedicineDetails();
    fetchFeedDetails();
    fetchMortalityDetails();
  }, [farmId, userId]);
  return (
    <div className="mainDivFarmDetails">
      <h2 className="mx-2">Farm Reports</h2>

      <div>
        <h5 className="mx-4 my-4">Medicine Report</h5>
        {medicineDetails.length === 0 ? (
          <p className="emptyMsg">No medicine details available.</p>
        ) : (
          <table className="table">
            <thead>
              <tr>
                <th>Si.no</th>
                <th>Date</th>
                <th>Vaccinated date</th>
                <th>Medicine name</th>
                <th>Medicine Quantity</th>
              </tr>
            </thead>
            <tbody>
              {medicineDetails.map((values, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{new Date(values.date).toLocaleDateString()}</td>
                  <td>
                    {new Date(values.dateOfVaccination).toLocaleDateString()}
                  </td>
                  <td>{values.medicineName}</td>
                  <td>{values.Quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      <div>
        <h5 className="mx-4 my-4">Feed Report</h5>
        {medicineDetails.length === 0 ? (
          <p className="emptyMsg">No feed details available.</p>
        ) : (
          <table className="table ">
            <thead>
              <th>Si.no</th>
              <th>Date</th>
              <th>Quantity Recieved</th>
              <th>Quantity Consumed</th>
            </thead>

            {feedDetails.map((values, index) => (
              <tbody>
                <td>{index + 1}</td>
                <td>{new Date(values.feedDate).toLocaleDateString()}</td>
                <td>{values.qtyReceived} bags</td>
                <td>{values.qtyConsumed} bags</td>
              </tbody>
            ))}
          </table>
        )}
      </div>
      <div>
        <h5 className="mx-4 my-4">Mortality Report</h5>
        {medicineDetails.length === 0 ? (
          <p className="emptyMsg">No mortality details available.</p>
        ) : (
          <table className="table ">
            <thead>
              <th>Si.no</th>
              <th>Date</th>
              <th>Mortality Count</th>
            </thead>

            {mortalityDetails.map((values, index) => (
              <tbody>
                <td>{index + 1}</td>
                <td>{new Date(values.date).toLocaleDateString()}</td>
                <td>{values.noOfMortality}</td>
              </tbody>
            ))}
          </table>
        )}
      </div>
    </div>
  );
}

export default FarmDetails;
