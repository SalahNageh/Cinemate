import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";
import IconHeart from "react-native-vector-icons/Ionicons";
import IconEye from "react-native-vector-icons/Ionicons";
import IconCal from "react-native-vector-icons/AntDesign";
import { useDispatch, useSelector } from "react-redux";
import { fetchSimilarMovies } from "../screens/Redux/slices/movieSlice";
import { addMovieToFavorites } from "../screens/Redux/slices/favorites";

const MovieCard = ({ movie }) => {
  const imgPath = "https://image.tmdb.org/t/p/w500/";
  const { navigate } = useNavigation();
  const dispatch = useDispatch();
  const favoritesArr = useSelector((state) => state.wishList.wishListmovies);
  const [heartColor, setHeartColor] = useState("white");

  useEffect(() => {
    // Check if the movie is in the favorites array
    const isFavorite = favoritesArr.some(
      (favMovie) => favMovie.id === movie.id
    );
    // Set the heart color accordingly
    setHeartColor(isFavorite ? "red" : "white");
  }, [favoritesArr, movie.id]);

  const toggleHeartColor = () => {
    dispatch(addMovieToFavorites(movie));
  };

  const onPress = () => {
    dispatch(fetchSimilarMovies(movie.id));
    navigate("Details", { movie: movie });
  };
  return (
    <View style={styles.container}>
      <Pressable onPress={onPress}>
        <Image
          style={styles.poster}
          source={{ uri: imgPath + movie.backdrop_path }}
          resizeMode="cover"
        />
        <View style={styles.heartIcon}>
          <IconHeart
            name="heart"
            size={28}
            color={heartColor}
            onPress={toggleHeartColor}
          />
        </View>
      </Pressable>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{movie.title}</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          marginBottom: 15,
        }}
      >
        {/* date */}

        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <IconCal name="calendar" size={30} color={"#fa8072"} />
          <Text style={{ marginLeft: 7, fontSize: 17 }}>
            {new Date(movie.release_date).getFullYear()}
          </Text>
        </View>
        {/* Rating */}

        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Icon name="star" size={30} color={"gold"} />
          <Text style={{ marginLeft: 5, marginBottom: 0, fontSize: 17 }}>
            {Math.floor(movie.vote_average)}/10
          </Text>
        </View>
        {/* Popularity */}

        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <IconEye name="eye" size={30} color="black" />
          <Text style={{ marginLeft: 5, marginBottom: 0, fontSize: 17 }}>
            {Math.floor(movie.popularity)}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    margin: 10,
    borderRadius: 10,
    backgroundColor: "#f0f0f0",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  poster: {
    width: "100%",
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  contentContainer: {
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  heartIcon: {
    position: "absolute",
    top: 10,
    right: 10,
    zIndex: 1,
  },
});

export default MovieCard;
