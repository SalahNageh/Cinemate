//--------------------------------------------------------------------------
import Icon from "react-native-vector-icons/Entypo";
import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import DropDown from "react-native-vector-icons/Ionicons";
import IconCategory from "react-native-vector-icons/MaterialIcons";
import IconLanguage from "react-native-vector-icons/FontAwesome6";
import IconDate from "react-native-vector-icons/Fontisto";
import LiftUp from "react-native-vector-icons/Ionicons";
import SimiarMovies from "./simiarMovies";

const DetailsCard = ({ movie, cat }) => {
  const imgPath = "https://image.tmdb.org/t/p/w500/";
  const [showAll, setShowAll] = useState(false);
  const [numOfLines, setNumOfLines] = useState(0);
  const { navigate } = useNavigation();
  const handleTextLayout = (e) => {
    const { lines } = e.nativeEvent;
    // Count the number of lines in the overview text
    setNumOfLines(lines.length);
  };
  const similarMoviesArr = useSelector((state) => state.movies.similarMovies);

  return (
    <ScrollView style={styles.container}>
      <View style={{ height: 350 }}>
        <Image
          style={styles.img}
          source={{
            uri: imgPath + movie.poster_path,
          }}
        />
        <View style={styles.overlay}>
          <View>
            <Text style={styles.overlayText}>{movie.title}</Text>
          </View>
        </View>
      </View>
      <View style={[styles.details, { opacity: 1 }]}>
        {/* rating */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "black",
            width: 65,
            borderRadius: 15,
            marginLeft: 280,
            marginTop: 14,
          }}
        >
          <Icon
            name="star"
            size={20}
            color={"gold"}
            style={{ marginLeft: 4 }}
          />
          <Text
            style={{
              marginLeft: 5,
              marginBottom: 0,
              fontSize: 13,
              color: "yellow",
            }}
          >
            {Math.floor(movie.vote_average)}/10
          </Text>
        </View>
        {/* category/language/date */}
        <View style={styles.ingredients}>
          <View style={styles.ingredientItem}>
            <View style={[styles.ingredientIcon, { marginLeft: 11 }]}>
              <IconCategory name="local-movies" size={20} />
            </View>
            <Text
              style={[
                styles.ingredientText,
                {
                  marginRight: 6,
                  color: "red",
                  fontSize: 15,
                  fontWeight: "500",
                },
              ]}
            >
              {cat}
            </Text>
          </View>
          <View style={styles.verticalLine} />
          <View style={styles.ingredientItem}>
            <View style={styles.ingredientIcon}>
              <IconLanguage name="language" size={20} />
            </View>
            <Text style={styles.ingredientText}>{movie.original_language}</Text>
          </View>
          <View style={styles.verticalLine} />
          <View style={styles.ingredientItem}>
            <View style={styles.ingredientIcon}>
              <IconDate name="date" size={20} />
            </View>
            <Text style={[styles.ingredientText, { marginRight: 15 }]}>
              {movie.release_date}
            </Text>
          </View>
        </View>
        {/* overview */}
        <Text
          style={{
            fontSize: 25,
            fontWeight: "700",
            marginHorizontal: "auto",
            marginTop: 8,
          }}
        >
          Over View
        </Text>
        <Text
          numberOfLines={showAll ? undefined : 2}
          onTextLayout={handleTextLayout}
          style={styles.overview}
        >
          {movie.overview}
        </Text>
        {numOfLines > 2 && !showAll && (
          <TouchableOpacity onPress={() => setShowAll(true)}>
            <DropDown
              name="caret-down"
              size={28}
              style={{ textAlign: "center", color: "black" }}
            ></DropDown>
          </TouchableOpacity>
        )}
        {showAll && (
          <TouchableOpacity onPress={() => setShowAll(false)}>
            <LiftUp
              name="caret-up"
              size={28}
              style={{ textAlign: "center" }}
            ></LiftUp>
            {/* <Text style={styles.seeLess}>Read less</Text> */}
          </TouchableOpacity>
        )}
        {/* similarmovies */}
        <Text style={{ fontSize: 25, fontWeight: "700", marginLeft: 13 }}>
          Similar Movies
        </Text>

        <ScrollView horizontal>
          {similarMoviesArr.map((sm) => (
            <SimiarMovies
              key={sm.id}
              img={sm.poster_path}
              title={sm.title}
            ></SimiarMovies>
          ))}
        </ScrollView>
        {/* end of form  */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { backgroundColor: "white" },
  img: { width: "100%", height: 350 },
  details: {
    height: 430,
    backgroundColor: "#f0f8ff",
    marginTop: -50,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  ingredients: {
    flexDirection: "row",
    width: "90%",
    backgroundColor: "white",
    borderRadius: 18,
    marginHorizontal: "auto",
    marginTop: 15,
    height: 50,
    justifyContent: "space-between",
    alignItems: "center",
  },
  ingredientItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  ingredientIcon: {
    marginRight: 5,
  },
  ingredientText: {
    color: "black",
  },
  verticalLine: {
    height: 35,
    width: 2,
    backgroundColor: "black",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end",
    marginBottom: 70,
    padding: 10,
  },
  overlayText: {
    color: "white",
    fontSize: 23,
    // backgroundColor: "rgba(0,0,0,0.5)",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    fontWeight: "900",
  },
  overview: {
    fontSize: 16,
    lineHeight: 20,
    marginBottom: 10,
    marginLeft: 12,
  },
});

export default DetailsCard;
