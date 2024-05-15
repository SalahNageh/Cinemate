import React from "react";
import { ScrollView, StyleSheet, View, Text, Image } from "react-native";
import { useSelector } from "react-redux";
import MovieCard from "../component/movieCard";
import FavoritsCard from "../component/favoritsCard";
import NoMovies from "../component/noMovies";

const Favorites = () => {
  const favoritesArr = useSelector((state) => state.wishList.wishListmovies);

  return (
    <>
      <ScrollView style={{ backgroundColor: "#708090" }}>
        {favoritesArr.length == 0 ? (
          <View>
            <NoMovies
              data1="Your list is"
              data=" Empty!!"
              img="https://static.thenounproject.com/png/30072-200.png"
            ></NoMovies>
          </View>
        ) : (
          favoritesArr.map((m) => (
            // <MovieCard key={m.id} movie={m}></MovieCard>
            <FavoritsCard key={m.id} movie={m}></FavoritsCard>
          ))
        )}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  img: {
    width: 343,
    height: 350,
    backgroundColor: "transpernt",
    // borderStyle: "solid",
    // borderWidth: 4,
    // borderColor: "black",
  },
  txt: { textAlign: "center", fontSize: 25, fontWeight: "bold" },
});

export default Favorites;
