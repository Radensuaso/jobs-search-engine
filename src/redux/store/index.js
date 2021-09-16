import { createStore, combineReducers } from "redux";
import favoritesReducer from "../reducers/favoritesReducer.js";
import initialState from "../initialState.js";

const reducers = combineReducers({
  favorites: favoritesReducer,
});

const configureStore = createStore(
  reducers,
  initialState,
  process.env.REACT_APP_DEVELOPMENT && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default configureStore;
