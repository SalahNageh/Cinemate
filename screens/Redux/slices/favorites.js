import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishListmovies: [],
};

const wishListSlice = createSlice({
  name: "wishList", // Change name to "wishList"
  initialState,
  reducers: {
    addMovieToFavorites(state, action) {
      const newMovie = action.payload;

      if (typeof newMovie === "object" && newMovie !== null) {
        const existingItemIndex = state.wishListmovies.findIndex(
          (m) => m.id === newMovie.id
        );

        if (existingItemIndex !== -1) {
          // If movie already exists, remove it
          state.wishListmovies.splice(existingItemIndex, 1);
        } else {
          // If movie doesn't exist, add it
          state.wishListmovies.push(newMovie);
        }
      } else {
        console.error("Invalid item added to favorites:", newMovie);
      }
    },
  },
});

export const { addMovieToFavorites } = wishListSlice.actions;
export default wishListSlice.reducer;
