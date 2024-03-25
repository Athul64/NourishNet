import { adminInstance } from "../Axios/axiosInstance";

//POST

export const adminLogin = (values) => {
  return adminInstance.post("/login", { ...values });
};

export const userDisable = (id) => {
  console.log(id, "Disable!!");
  return adminInstance.post("/disableuser", { id });
};

//GET

export const getUserDetails = () => {
  return adminInstance.get("/listuser");
};
export const getUserFarmDetails = (userId) => {
  return adminInstance.get(`/getuserFarm/${userId}`);
};
export const getMedicineDetails = (farmId, userId) => {
  return adminInstance.get(`/getmedicinedetails/${userId}`, {
    params: { farmId: farmId },
  });
};
export const getFeedDetails = (farmId, userId) => {
  return adminInstance.get(`/getfeeddetails/${userId}`, {
    params: { farmId: farmId },
  });
};


export const getMortalityDetails = (farmId, userId) => {
  return adminInstance.get(`/getmortalitydetails/${userId}`, {
    params: { farmId: farmId },
  });
};

export const AdminDashboard = () => {
  return adminInstance.get("/admindashboard");
};

export const getFeedback=(userId)=>{
  return adminInstance.get(`/feedback/${userId}`)
}