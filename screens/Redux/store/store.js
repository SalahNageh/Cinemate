// // src/app/store.js

// import { configureStore } from "@reduxjs/toolkit";
// import movieSlice from "../slices/movieSlice";
// import wishListSlice from "../slices/movieSlice";

// export const store = configureStore({
//   reducer: {
//     movies: movieSlice,
//     wishList: wishListSlice,
//   },
// });

// export default store;
//-------------------------------------------
import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "../slices/movieSlice"; // Ensure this imports the correct slice
import wishListSlice from "../slices/favorites"; // Correct the import path

export const store = configureStore({
  reducer: {
    movies: movieSlice,
    wishList: wishListSlice,
  },
});

export default store;
