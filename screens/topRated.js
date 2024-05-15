import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TextInput,
  Image,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchTopRatedMovies } from "./Redux/slices/movieSlice";
import MovieCard from "../component/movieCard";
import IconSearch from "react-native-vector-icons/MaterialCommunityIcons";

import Icon from "react-native-vector-icons/FontAwesome";
import NoMovies from "../component/noMovies";

const TopRated = () => {
  const movies = useSelector((state) => state.movies.topRatedMovies);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTopRatedMovies());
  }, [dispatch]);

  const [searchText, setSearchText] = useState("");

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().startsWith(searchText.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <IconSearch name="movie-search" size={20}></IconSearch>
        <TextInput
          style={styles.inputTxt}
          placeholder="Search movies..."
          onChangeText={setSearchText}
          value={searchText}
        />
      </View>
      <ScrollView>
        {filteredMovies.length === 0 ? (
          <View>
            <NoMovies
              data1="No movies"
              data=" Found!!"
              img="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/70f4c7ed-5821-4709-9765-82ec0b27a210/dfs68r1-85be6b47-8df2-4b9e-a037-90528f3494cc.png/v1/fill/w_1280,h_1280/popcorn_png_by_allstaraward123_dfs68r1-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcLzcwZjRjN2VkLTU4MjEtNDcwOS05NzY1LTgyZWMwYjI3YTIxMFwvZGZzNjhyMS04NWJlNmI0Ny04ZGYyLTRiOWUtYTAzNy05MDUyOGYzNDk0Y2MucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.pE0Gbye25YWbVsxTCcktcIGlYKntn5iLGfHHMRapRDg"
            ></NoMovies>
          </View>
        ) : (
          filteredMovies.map((m) => (
            <MovieCard
              key={m.id}
              movie={m}
              // img={m.backdrop_path}
              // title={m.title}
              // overview={m.overview}
              // date={m.release_date}
            />
          ))
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#708090",

    padding: 10,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  inputTxt: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
  },
  img: {
    width: 343,
    height: 350,
    backgroundColor: "transpernt",
    // borderStyle: "solid",
    // borderWidth: 4,
    // borderColor: "black",
  },
  sass: { backgroundColor: "white" },
  txt: { textAlign: "center", fontSize: 25, fontWeight: "bold" },
});

export default TopRated;
