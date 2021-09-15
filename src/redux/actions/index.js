import { ADD_TO_FAV, REMOVE_FROM_FAV } from "../reducers";

export const addToFavAction = (job) => ({
  type: ADD_TO_FAV,
  payload: job,
});

export const removeFromFavAction = (job) => ({
  type: REMOVE_FROM_FAV,
  payload: job,
});
