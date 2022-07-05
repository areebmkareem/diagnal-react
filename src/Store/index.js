import { configureStore } from "@reduxjs/toolkit";

import movies from "./Features/Movies/movieSlice";

const store = configureStore({
  reducer: {
    movies,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
