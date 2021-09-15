import axios from "axios";

export const getJobs = async (query) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_BE_URL}?limit=100&search=${query}`
    );
    if (response.status === 200) {
      return response.data;
    } else {
      console.log("There was an error.");
    }
  } catch (error) {
    console.log(error);
  }
};

export const getSingleJob = async (jobId) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_BE_URL}?_id=${jobId}`
    );
    if (response.status === 200) {
      return response.data;
    } else {
      console.log("There was an error.");
    }
  } catch (error) {
    console.log(error);
  }
};
