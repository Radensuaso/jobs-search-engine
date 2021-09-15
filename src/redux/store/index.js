import { createStore } from "redux";
import mainReducer from "../reducers";

export const initialState = {
  favorites: {
    list: [],
  },
};

const configureStore = createStore(
  mainReducer,
  initialState,
  process.env.REACT_APP_DEVELOPMENT && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default configureStore;
