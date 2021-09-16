import initialState from "../initialState.js";

const jobsReducer = (state = initialState.jobs, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default jobsReducer;
