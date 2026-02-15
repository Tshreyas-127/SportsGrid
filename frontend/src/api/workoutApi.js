import axios from "axios";

const BASE_URL = "http://localhost:4040/fitness/workout";

// Member → submit workout request
export const requestWorkout = (data) => {
  return axios.post(`${BASE_URL}/request`, data, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`
    }
  });
};

// Trainer → get pending workout requests
export const getWorkoutRequests = () => {
  return axios.get(`${BASE_URL}/requests`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`
    }
  });
};

// Trainer → create workout plan
export const createWorkoutPlan = (data) => {
  return axios.post(`${BASE_URL}/plan/create`, data, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`
    }
  });
};

// Member → view workout plan
export const getWorkoutPlan = (memberId) => {
  return axios.get(`${BASE_URL}/plan/${memberId}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`
    }
  });
};
