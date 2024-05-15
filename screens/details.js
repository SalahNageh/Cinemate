import React from "react";
import { StyleSheet, View, Text } from "react-native";
import DetailsCard from "../component/detailsCard";
import { useRoute } from "@react-navigation/native";
import { getNameOfGenre } from "../utilies/genres";

const Details = () => {
  const { params } = useRoute();
  const data = params.movie;
  const genreData = getNameOfGenre(data.genre_ids[0]);
  return (
    <View>
      <DetailsCard movie={data} cat={genreData}></DetailsCard>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Details;
