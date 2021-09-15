export const ADD_TO_FAV = "ADD_TO_FAV";
export const REMOVE_FROM_FAV = "REMOVE_FROM_FAV";

export const initialState = {
  favorites: {
    list: [],
  },
};

export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAV: {
      return {
        ...state,
        favorites: {
          ...state.favorites,
          list: [...state.favorites.list, action.payload],
        },
      };
    }
    case REMOVE_FROM_FAV: {
      return {
        ...state,
        favorites: {
          ...state.favorites,
          list: [
            ...state.favorites.list.filter(
              (fl) => fl._id !== action.payload._id
            ),
          ],
        },
      };
    }

    default:
      return state;
  }
};
