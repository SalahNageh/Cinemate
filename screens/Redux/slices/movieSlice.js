import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const headers = {
  "Content-Type": "application/json",
  Authorization:
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MDM0NWIxOTQxNjE0NDFjNjI5MzE2OTgyZTE2NWFiYyIsInN1YiI6IjY2M2YzZWU1Y2VhNGFiNTNmZTQ3YmM3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TxrqjF-6rIjELu0O328X3CkdDgEjT2gGI2YVcOcMbXE",
};
const initialState = {
  movies: [],
  trendingMovies: [],
  similarMovies: [],
  topRatedMovies: [],
  popularMovies: [],
  loading: false,
  error: null,
};
export const fetchSimilarMovies = createAsyncThunk(
  "movies/fetchSimilarMovies",
  async (movieID) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieID}/similar`,
      {
        method: "GET",
        headers: headers,
      }
    );
    if (!response.ok) {
      throw new Error("Failed to fetch movies.");
    }

    const data = await response.json();
    return data;
  }
);
//get all mpvies
export const fetchMovies = createAsyncThunk("movies/fetchMovies", async () => {
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/now_playing",
    {
      method: "GET",
      headers: headers,
    }
  );
  if (!response.ok) {
    throw new Error("Failed to fetch movies.");
  }
  const data = await response.json();
  return data;
});

//get UpComing movies
export const fetchTrendingMovies = createAsyncThunk(
  "movies/fetchTrendingMovies",
  async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming",
      {
        method: "GET",
        headers: headers,
      }
    );
    if (!response.ok) {
      throw new Error("Failed to fetch movies.");
    }
    const data = await response.json();
    return data;
  }
);
//get Top Rated movies
export const fetchTopRatedMovies = createAsyncThunk(
  "movies/fetchTopRatedMovies",
  async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated",
      {
        method: "GET",
        headers: headers,
      }
    );
    if (!response.ok) {
      throw new Error("Failed to fetch movies.");
    }
    const data = await response.json();
    return data;
  }
);
//get Top Rated movies
export const fetchPopularMovies = createAsyncThunk(
  "movies/fetchPopularMovies",
  async () => {
    const response = await fetch("https://api.themoviedb.org/3/movie/popular", {
      method: "GET",
      headers: headers,
    });
    if (!response.ok) {
      throw new Error("Failed to fetch movies.");
    }
    const data = await response.json();
    return data;
  }
);

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      //now playing movies
      .addCase(fetchMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.movies = action.payload.results;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      //up coming movies
      .addCase(fetchTrendingMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTrendingMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.trendingMovies = action.payload.results;
      })
      .addCase(fetchTrendingMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      //top rated movies
      .addCase(fetchTopRatedMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTopRatedMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.topRatedMovies = action.payload.results;
      })
      .addCase(fetchTopRatedMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      //popular movies
      .addCase(fetchPopularMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPopularMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.popularMovies = action.payload.results;
      })
      .addCase(fetchPopularMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchSimilarMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSimilarMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.similarMovies = action.payload.results;
      })
      .addCase(fetchSimilarMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default movieSlice.reducer;
