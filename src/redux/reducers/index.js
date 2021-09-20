import { combineReducers } from "redux";
import favoritesReducer from "./favoritesReducer";
import jobsReducer from "./jobsReducer";
import { persistReducer } from "redux-persist";
import { encryptTransform } from "redux-persist-transform-encrypt";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  transforms: [
    encryptTransform({
      secretKey: process.env.REACT_APP_ENCRYPTED_PERSIST_KEY,
    }),
  ],
};
const reducer = combineReducers({
  favorites: favoritesReducer,
  jobs: jobsReducer,
});

const persistingReducer = persistReducer(persistConfig, reducer);

export default persistingReducer;
