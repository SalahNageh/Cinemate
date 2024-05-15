import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import StackNavigation from "./navigators/stackNavigation";
import { Provider } from "react-redux";
import store from "./screens/Redux/store/store";
import BottomNavigatio from "./navigators/bottomNavigatio";

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" />
      <NavigationContainer>
        <StackNavigation></StackNavigation>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
