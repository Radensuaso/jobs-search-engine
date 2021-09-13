import axios from "axios";

export const getJobs = async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_BE_URL}?limit=100`
    );
    if (response.status === 200) {
      const data = response.data;
      return data;
    } else {
      console.log("There was an error.");
    }
  } catch (error) {
    console.log(error);
  }
};

export const getSearchedJobs = async (query) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_BE_URL}?search=${query}`
    );
    if (response.status === 200) {
      const data = response.data;
      return data;
    } else {
      console.log("There was an error.");
    }
  } catch (error) {
    console.log(error);
  }
};
