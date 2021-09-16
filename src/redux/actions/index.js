import axios from "axios";

export const ADD_TO_FAV = "ADD_TO_FAV";
export const REMOVE_FROM_FAV = "REMOVE_FROM_FAV";
export const FILL_JOBS = "FILL_JOBS";
export const LOADING = "LOADING";
export const ERROR = "ERROR";

export const fetchJobsAction = (query) => {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: LOADING,
        payload: true,
      });

      const response = await axios.get(
        `${process.env.REACT_APP_BE_URL}?limit=100&search=${query ? query : ""}`
      );
      if (response.status === 200) {
        const jobs = response.data.data;
        dispatch({
          type: FILL_JOBS,
          payload: jobs,
        });

        dispatch({
          type: ERROR,
          payload: false,
        });

        setTimeout(() => {
          dispatch({
            type: LOADING,
            payload: false,
          });
        }, 1000);
      } else {
        dispatch({
          type: ERROR,
          payload: true,
        });

        setTimeout(() => {
          dispatch({
            type: LOADING,
            payload: false,
          });
        }, 1000);
      }
    } catch (error) {
      dispatch({
        type: ERROR,
        payload: true,
      });

      setTimeout(() => {
        dispatch({
          type: LOADING,
          payload: false,
        });
      }, 1000);
    }
  };
};

export const addToFavAction = (job) => ({
  type: ADD_TO_FAV,
  payload: job,
});

export const removeFromFavAction = (job) => ({
  type: REMOVE_FROM_FAV,
  payload: job,
});
