export const ADD_TO_FAV = "ADD_TO_FAV";
export const REMOVE_FROM_FAV = "REMOVE_FROM_FAV";

export const addToFavAction = (job) => ({
  type: ADD_TO_FAV,
  payload: job,
});

export const removeFromFavAction = (job) => ({
  type: REMOVE_FROM_FAV,
  payload: job,
});
