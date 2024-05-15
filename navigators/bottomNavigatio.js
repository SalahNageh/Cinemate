import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Ionicons } from "@expo/vector-icons"; // Import Ionicons from Expo vector icons
import IconMovie from "@expo/vector-icons/Entypo";
import IconHeart from "@expo/vector-icons/AntDesign";
import IconTopRated from "@expo/vector-icons/MaterialIcons";
import IconUpComing from "@expo/vector-icons/Entypo";

import UpComing from "../screens/upComingPage";
import Home from "../screens/home";
import Favorites from "../screens/favorites";
import TopRated from "../screens/topRated";
import Entry from "../screens/entry";
import { setStatusBarBackgroundColor } from "expo-status-bar";

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerTitleStyle: {
          textAlign: "center",
          marginLeft: 120,
          fontSize: 22,
          color: "white",
          fontWeight: "bold",
        },
        headerStyle: { backgroundColor: "#708090" },

        tabBarStyle: { backgroundColor: "white", borderTopWidth: 0 },
      }}
      tabBarOptions={{
        activeTintColor: "#ef233c",
        inactiveTintColor: "#2b2d42",
        labelPosition: "below-icon",
        labelStyle: {
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
        },
        style: {
          alignItems: "center",
          justifyContent: "center",
        },
      }}
    >
      {/* Your tab screens */}

      {/* <Tab.Screen
        name="Home"
        component={Entry}
        options={{
          tabBarIcon: ({ color, size }) => (
            <IconMovie name="clapperboard" size={size} color={color} />
          ),
        }}
      /> */}
      <Tab.Screen
        name="Movies"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <IconMovie name="clapperboard" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Trending"
        component={TopRated}
        options={{
          tabBarIcon: ({ color, size }) => (
            <IconTopRated name="auto-graph" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Upcoming"
        component={UpComing}
        options={{
          tabBarIcon: ({ color, size }) => (
            <IconUpComing name="new" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarIcon: ({ color, size }) => (
            <IconHeart name="heart" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
