import api from "./axiosConfig";

// MEMBER → submit nutrition request
export const requestDiet = (data) => {
  return api.post("/fitness/nutrition/request", data);
};

// MEMBER → view diet plan
export const getDietPlan = (memberId) => {
  return api.get(`/fitness/nutrition/plan/${memberId}`);
};

// MEMBER → get own requests
export const getMyDietRequests = (memberId) => {
  return api.get(`/fitness/nutrition/my-requests?memberId=${memberId}`);
};

// NUTRITIONIST / ADMIN → get pending requests
export const getPendingRequests = () => {
  return api.get("/fitness/nutrition/requests");
};

// NUTRITIONIST → create diet plan
export const createDietPlan = (data) => {
  return api.post("/fitness/nutrition/plan/create", data);
};
