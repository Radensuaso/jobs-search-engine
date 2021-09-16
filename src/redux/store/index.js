import { createStore, applyMiddleware, compose } from "redux";
import initialState from "../initialState.js";
import thunk from "redux-thunk";
import reducers from "../reducers/index.js";

const configureStore = createStore(
  reducers,
  initialState,
  process.env.REACT_APP_DEVELOPMENT
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(applyMiddleware(thunk))
    : compose(applyMiddleware(thunk))
);

export default configureStore;
