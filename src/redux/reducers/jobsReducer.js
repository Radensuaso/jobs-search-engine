import { ERROR, FILL_JOBS, LOADING } from "../actions/index.js";
import initialState from "../initialState.js";

const jobsReducer = (state = initialState.jobs, action) => {
  switch (action.type) {
    case FILL_JOBS:
      return { ...state, jobsList: action.payload };
    case LOADING:
      return { ...state, loading: action.payload };
    case ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default jobsReducer;
