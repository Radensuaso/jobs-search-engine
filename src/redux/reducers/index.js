import { initialState } from "../store";

const ADD_TO_FAV = "ADD_TO_FAV";
const REMOVE_FROM_FAV = "ADD_TO_FAV";

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAV: {
      return "something";
    }
    case REMOVE_FROM_FAV: {
      return "something";
    }

    default:
      return state;
  }
};

export default mainReducer;
