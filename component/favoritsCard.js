import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import IconHeart from "react-native-vector-icons/Ionicons";
import { useDispatch, useSelector } from "react-redux";
import { addMovieToFavorites } from "../screens/Redux/slices/favorites";

const FavoritsCard = ({ movie }) => {
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

  return (
    <View style={styles.container}>
      <View style={styles.circularContainer}>
        <Image
          style={styles.poster}
          source={{ uri: imgPath + movie.poster_path }}
          resizeMode="cover"
        />
        <View style={styles.heartIconContainer}>
          <IconHeart
            name="heart"
            size={40}
            color={heartColor}
            onPress={toggleHeartColor}
          />
        </View>
      </View>
      <Text
        style={{
          marginTop: 8,
          fontSize: 25,
          fontWeight: "600",
          color: "white",
          fontWeight: "bold",
        }}
      >
        {movie.title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    alignItems: "center", // Center the circular container horizontally
  },
  circularContainer: {
    borderRadius: 20, // Make the inner container circular
    overflow: "hidden", // Hide any content that overflows the circular container
    position: "relative", // Set position to relative to position the heart icon
    width: "90%", // Set width and height to create a circular container
    height: 300,
  },
  poster: {
    width: "100%",
    height: "100%",
  },
  heartIconContainer: {
    position: "absolute",
    top: "10%", // Position the heart icon at the vertical center of the circular container
    left: "85%", // Position the heart icon at the horizontal center of the circular container
    transform: [{ translateX: -14 }, { translateY: -14 }], // Adjust the position to center the heart icon
    zIndex: 1,
  },
});

export default FavoritsCard;
