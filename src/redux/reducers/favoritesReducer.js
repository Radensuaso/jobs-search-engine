import initialState from "../initialState.js";

export const ADD_TO_FAV = "ADD_TO_FAV";
export const REMOVE_FROM_FAV = "REMOVE_FROM_FAV";

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
