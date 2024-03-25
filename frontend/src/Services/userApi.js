import { userInstance } from "../Axios/axiosInstance";

//POST methods

export const userSignup = (values) => {
  return userInstance.post("/signup", { ...values });
};

export const userLogin = (values) => {
  return userInstance.post("/login", { ...values });
};

export const addFarmDetails = (values, userId) => {
  console.log(userId, "function user Api");
  return userInstance.post(`/addfarm/${userId}`, { ...values });
};

export const addFeedDetails = (values, userId, farmId) => {
  return userInstance.post(`/addfeed/${userId}`, { ...values, farmId: farmId });
};

export const addMedicineDetails = (values, userId, farmId) => {
  return userInstance.post(`/addmedicine/${userId}`, {
    ...values,
    farmId: farmId,
  });
};

export const addMortality = (values, userId, farmId) => {
  return userInstance.post(`/addmortality/${userId}`, {
    ...values,
    farmId: farmId,
  });
};

export const helpAndSupportDetails=(values,userId)=>{
  return userInstance.post(`/helpAndSupport/${userId}`,{...values})
}

//GET methods

export const userHeader = () => {
  return userInstance.get("/");
};

export const showUserFarms = (userId) => {
  return userInstance.get(`/showuserfarms/${userId}`);
};

export const showFeedDetails = (userId, farmId) => {
  return userInstance.get(`/feedDetails/${userId}`, {
    params: { farmId: farmId },
  });
};

export const showMedicineDetails = (farmId, userId) => {
  return userInstance.get(`/medicineDetails/${userId}`, {
    params: { farmId: farmId },
  });
};

export const showMortality = (farmId, userId) => {
  return userInstance.get(`/mortalityDetails/${userId}`, {
    params: { farmId: farmId },
  });
};
