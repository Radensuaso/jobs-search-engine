import { combineReducers } from "redux";
import favoritesReducer from "./favoritesReducer";
import jobsReducer from "./jobsReducer";

const reducers = combineReducers({
  favorites: favoritesReducer,
  jobs: jobsReducer,
});

export default reducers;
