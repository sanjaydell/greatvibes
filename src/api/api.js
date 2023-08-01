import axios from "axios";

const BASE_URL = "https://64c57fc9c853c26efadade05.mockapi.io/jobs/jobs";

export const getJobById = async (jobId) => {
  try {
    const response = await axios.get(`${BASE_URL}/${jobId}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const updateJobById = async (jobId, jobInformation) => {
  try {
    const response = await axios.put(`${BASE_URL}/${jobId}`, jobInformation);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const createJob = async (jobInformation) => {
  try {
    const response = await axios.post(BASE_URL, jobInformation);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getAllJobs = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const deleteJobById = async (jobId) => {
  try {
    const response = await axios.delete(`${BASE_URL}/${jobId}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// axios({
//   method: "GET",
//   url: "https://64c57fc9c853c26efadade05.mockapi.io/jobs/jobs",
//   headers: { "content-type": "application/json" },
// })
//   .then((res) => {
//     setJobs(res.data.reverse());
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
