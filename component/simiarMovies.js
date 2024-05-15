import React from "react";
import { Image, StyleSheet, View, Text } from "react-native";

const SimiarMovies = ({ img, title }) => {
  const imgPath = "https://image.tmdb.org/t/p/w500/";

  return (
    <View>
      <Image source={{ uri: imgPath + img }} style={styles.image}></Image>
    </View>
  );
};

const styles = StyleSheet.create({
  image: { width: 100, height: 150, borderRadius: 15, margin: 10 },
});

export default SimiarMovies;
