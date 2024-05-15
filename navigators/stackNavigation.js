import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Home from "../screens/home";
import About from "../screens/about";
import Details from "../screens/details";
import BottomNavigatio from "./bottomNavigatio";
const stack = createNativeStackNavigator();
const StackNavigation = () => {
  return (
    <>
      <stack.Navigator>
        <stack.Screen
          name="tab"
          component={BottomNavigatio}
          options={{
            headerShown: false,
          }}
        ></stack.Screen>
        <stack.Screen name="Home" component={Home}></stack.Screen>
        <stack.Screen name="about" component={About}></stack.Screen>
        <stack.Screen name="Details" component={Details}></stack.Screen>
      </stack.Navigator>
    </>
  );
};

export default StackNavigation;
