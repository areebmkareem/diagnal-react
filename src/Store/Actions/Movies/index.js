import { createAction } from "@reduxjs/toolkit";
import { getMoviesAPI } from "../../../Services/Movies";

export const getMovies = createAction("movie/setMovies", function (page) {
  const response = getMoviesAPI(page);
  return {
    payload: response?.page,
  };
});
