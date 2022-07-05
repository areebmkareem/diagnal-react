import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  info: {},
  currentMovies: [],
  totalMovies: [],
  searchKey: "",
};

const handleTotalMovies = (state, data) => {
  let prevData = [...state?.totalMovies];
  return prevData.concat(data);
};
export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovies: (state, action) => {
      const totalMovies = handleTotalMovies(
        state,
        action?.payload?.["content-items"]?.content
      );
      state.info = action?.payload;
      state.totalMovies = totalMovies;
      state.currentMovies = totalMovies;
    },
    searchMovies: (state, action) => {
      state.searchKey = action?.payload;
      state.currentMovies = state?.totalMovies?.filter((item) =>
        item?.name?.toLowerCase().includes(action?.payload?.toLowerCase())
      );
    },
  },
});

export const { setMovies, searchMovies } = movieSlice.actions;

export default movieSlice.reducer;
