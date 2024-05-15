import React from "react";
import { Image, StyleSheet, View, Text } from "react-native";

const NoMovies = ({ data, img, data1 }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={{
          uri: img,
        }}
      ></Image>
      <Text style={styles.txt}>
        {data1}
        <Text style={{ color: "red", fontSize: 40 }}>{data}</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    marginTop: 50,
    width: 343,
    height: 350,
  },
  txt: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },
});

export default NoMovies;
