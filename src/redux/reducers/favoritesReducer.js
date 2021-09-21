import initialState from "../initialState.js";

import { ADD_TO_FAV, REMOVE_FROM_FAV } from "../actions/index.js";

const favoritesReducer = (state = initialState.favorites, action) => {
  switch (action.type) {
    case ADD_TO_FAV: {
      return {
        ...state,
        favoritesList: [...state.favoritesList, action.payload],
      };
    }
    case REMOVE_FROM_FAV: {
      return {
        ...state,
        favoritesList: state.favoritesList.filter(
          (fl) => fl._id !== action.payload._id
        ),
      };
    }

    default:
      return state;
  }
};

export default favoritesReducer;
